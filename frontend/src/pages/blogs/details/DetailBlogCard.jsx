import React from 'react'
import { formatDate } from '../../../utilis/formateDate';
import editorJSHTML from "editorjs-html"

const DetailBlogCard = ({ blog }) => {
  
  const { title, description, content, coverImg, category, rating, author, createdAt } = blog || {};
  let htmlContent = "<p>Pas de contenu disponible</p>";

  if (typeof content === "string") {
    // Si content est une simple chaîne, l'afficher tel quel
    htmlContent = `<p>${content}</p>`;
  } else if (content && content.blocks) {
    // Si content est un format Editor.js valide, le parser
    htmlContent = editorJSHTML.parse(content).join('');
  }

  return (
    <div className='bg-white p-8'>
      <div>
        <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
        <p>{formatDate(createdAt)} by <span className='text-blue-400 cursor-pointer'>Admin A</span></p>
      </div>
      <div>
        <img src={coverImg} className='w-full md:h-[520px] bg-cover' />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='space-y-3 editorjsdiv'/>
      
      <div>
          <span className='text-lg font-medium'>Rating:</span>
          <span>  {rating} (based on 2,370)</span>
      </div>

      <h3 className='text-lg font-medium'>Key freatures</h3>
      
      </div>
    </div>
  );
};

export default DetailBlogCard;
