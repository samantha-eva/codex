import express, { response } from "express";
import { getDb } from "../db/connection.js"; // ✅ Correct path
import { ObjectId } from "mongodb";

let posts = express.Router()

// Affiche les posts

posts.route("/posts").get( async (request,  response) => {
    let db = getDb();
    let data = await db.collection("posts").find({}).toArray()
    if(data.length > 0){
        response.json(data)
    }else{
        throw new Error("Data not found");
    }
})

// Affiche les posts par id 

posts.route("/posts/:id").get( async (request,  response) => {
    let db = getDb();
    let data = await db.collection("posts").findOne({_id: new ObjectId(request.params.id)})
    if( Object.keys(data).length > 0){
        response.json(data)
    }else{
        throw new Error("Data not found");
    }
})

// Créer un post

posts.route("/posts").get( async (request,  response) => {
    let db = getDb();
    let mongoObject = {
        title: request.body.title,
        description: request.body.description,
        content: request.body.content,
        auteur: request.body.auteur,
        dateCreated: request.body.dateCreated

    }
    let data = await db.collection("posts").insertOne(mongoObject)
    response.json(data)
   
})


// Update un post
posts.route("/posts/:id").put( async (request,  response) => {
    let db = getDb();
    let mongoObject = {
        $set: {
            title: request.body.title,
            description: request.body.description,
            content: request.body.content,
            auteur: request.body.auteur,
            dateCreated: request.body.dateCreated
        }
    }
    let data = await db.collection("posts").updateOne({_id: new ObjectId(request.params.id)},mongoObject)
    response.json(data)  
})

// Supprimer un post
posts.route("/posts/:id").delete( async (request,  response) => {
    let db = getDb();
    let data = await db.collection("posts").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)  
})

export default posts;