import React, { useState,useEffect } from 'react';
import EmptyList from '.././components/common/EmptyList';
import BlogList from '.././components/Home/BlogList';
// import Header from '.././components/Home/Header';
import SearchBar from '.././components/Home/SearchBar';
import { blogList } from '.././config/data';
import ButtonAdd from '../components/common/CreateButton/CreateButton';
import CusFooter from '../components/common/Footer/footer';
import FloatingActionButon from '../components/flotingActionButon';
import MyFooter from '../components/footer';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [pblogs, setPBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');
useEffect(()=>{

  fetch("http://localhost:8000/blogs").then((res) => {
      return res.json()
    }).then((resp) => {
      console.log("Resp");
      console.log(resp);
      setBlogs(resp);
      setPBlogs(resp);
      console.log("Data");
      console.log(blogs);
    })
},[]);
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = pblogs;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}

      
      {/* <Header /> */}

      {/* Search Bar */}
      <ButtonAdd/>
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      {/* <MyFooter/> */}
      {/* <CusFooter/> */}
      {/* <FloatingActionButon/> */}
    </div>
  );
};

export default Home;
