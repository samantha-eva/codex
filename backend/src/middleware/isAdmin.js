const isAdmin = (req, res, next) => {
    if(req.role !== 'admin'){
        return res.status(403).send({success:false, message: "Tu n'a pas les droit pour cette action"})
    }

    next()
}

export default isAdmin;