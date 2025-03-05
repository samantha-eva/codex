import React, {useState} from 'react'
import Search from './Search'
import { useFetchBlogsQuery } from '../../redux/features/blogs/blogsApi';
import { Link } from 'react-router-dom'; // Ajoute cette ligne

export const Blogs = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState({search:"", category:""});

  //get data using redux
  const {data, error, isLoading} = useFetchBlogsQuery(query);
  const blogs = data?.posts || []; // Remplace `blogs` par `posts`
  console.log("Blogs data:", blogs);


  const handleSearchChange = (e) =>{
    setSearch(e.target.value);
  }

  const handleSearch =() => setQuery({search,category})

  return (
    <div className='mt-16 container mx-auto'>
      <Search search={search} 
      handleSearchChange={handleSearchChange} 
      handleSearch={handleSearch}/>


      {isLoading && <div>Loading ...</div>}
      {error &&<div>{error.toString()}</div>}
      
      <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
          blogs.map(blog => (
            <Link
            to={`/blog/${blog._id}`}
            key={blog._id} 
            className="shadow-md">
              <h2 className='text-xl p-4'>gggg{blog.title}</h2>
            </Link>
          ))
        }
      </div>
    </div>


  )
}
export default Blogs