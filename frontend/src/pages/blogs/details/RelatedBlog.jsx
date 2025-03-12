import React from 'react';
import { useFetchRelatedBlogsQuery } from '../../../redux/features/blogs/blogsApi';
import { Link, useParams } from 'react-router-dom';

const RelatedBlog = () => {
    const { id } = useParams();
    const { data: blogs =[]} = useFetchRelatedBlogsQuery(id);
    
    console.log('ggg',blogs);

    return (
        <div>
            <h3 className='text-2xl font-medium pt-8 px-8 pb-5'>Related blogs</h3>
            <hr />

            {blogs.length > 0 ? (
                <div className='p-8'>No related blogs found</div>
            ) : (
                <div className='space-y-4 mt-5'>
                    {blogs.map((blog) => (
                        <Link className='flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4'>
                            <div className='size-14'>
                                <img src={blog.coverImg} alt="rr" className='h-full w-full rounded-full ring-2 ring-blue-700' />
                            </div>
                            <div>
                                <h4>{blog.title}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RelatedBlog;
