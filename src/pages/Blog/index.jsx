import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs/"+id).then((res) => {
      return res.json()
    }).then((resp) => {
      console.log("Resp");
      console.log(resp);
      setBlog(resp);
      console.log("Data");
      // console.log(data);
    })
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
    <div className="link-box">

      <Link className='blog-goBack' to='/'>
         &#8592;Go Back
      </Link>
    </div>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
