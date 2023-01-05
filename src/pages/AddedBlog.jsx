import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { blogList } from '.././config/data';
import { v4 as uuidv4 } from "uuid";
// const editJsonFile = require("edit-json-file");
export const AddBlog = () => {
    const navigate = useNavigate(); 
    // let file = editJsonFile(`${__dirname}/foo.json`);
    const [tit , setTit] = useState('');
    const [cat , setCat] = useState('Development');
    const [subCat , setSubCat] = useState('');
    const [des , setDes] = useState('');
    const [name, setName] = useState('');
    const [cov, setCov] = useState('');
        const onMySubmit = () => {
            
          const  blog =  {
                id: uuidv4(),
                title: tit,
                category: cat,
                subCategory: [subCat],
                description: des,
                 
                authorName: name,
                authorAvatar: '/assets/images/user.jpg',
                createdAt: 'January 06, 2023',
                cover: cov,
              }
            //   alert(blog.category+ blog.description)
              console.log(blog);

              blogList.push(blog);
              fetch("http://localhost:8000/blogs/" , {
            method: "POST",
           headers: {
          "Content-Type": "application/json"
            },
        body: JSON.stringify(blog)
      })
        .then(res => res.json())
        .then(result => {
          
            alert("Updated Successfully.")
            navigate("/")
            navigate("/",{ replace: true })
            navigate(-2)
            navigate("/")
            navigate("/")
            navigate("/")
            window.location.reload(false);
        });
              console.log(blogList.length);
        }

return (

    <form>
    <div className="form-group">
      <label >Title of the Blog</label>
      <input  className="form-control" id="exampleFormControlInput1" placeholder="Enter the Title" onChange={(e) => {setTit(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label >Select Category</label>
      <select className="form-control" id="exampleFormControlSelect1"  value={cat} onChange={(e)=>{
        setCat(e.target.value)
        // alert(cat)
      }}>
        <option>Development</option>
        <option>Entertainment</option>
        <option>Cooking</option>
        <option>Adventure</option>
        <option>Art</option>
      </select>
    </div>
    <div className="form-group">
      <label >Sub-Category</label>
      <input  className="form-control" id="exampleFormControlInput1" placeholder="Enter sub-category" onChange={(e) => {setSubCat(e.target.value)}} />
    </div>
    
    
  
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} defaultValue={""} onChange={(e) => {setDes(e.target.value)}} />
    </div>
    <div className="form-group">
      <label >Author's Name</label>
      <input  className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" onChange={(e) => {setName(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label >Cover Image's URL</label>
      <input type="link" className="form-control" id="exampleFormControlInput1" placeholder="Enter the url" onChange={(e) => {setCov(e.target.value)}} />
    </div>
    <div className="form-group">
        <br></br>
        <button className="btn btn-success" onClick={()=>{
                
            
                onMySubmit();
        }}> Post!!</button>
    </div>
  </form>
)

    // return (
    
    // <div className="mycontainer">
    //     <label>Title</label>
        
    //         <input onChange={(e) => {setTit(e.target.value)}}>
            
    //         </input>
    //         <label>Category</label>
        
    //         <input onChange={(e) => {setCat(e.target.value)}}>
            
    //         </input>
    //         <label>Sub-Category</label>
        
    //         <input onChange={(e) => {setSubCat(e.target.value)}}>
            
    //         </input>
    //         <label>blog</label>
        
    //         <input onChange={(e) => {setDes(e.target.value)}}>
            
    //         </input>
    //         <label>Author's Name </label>
       
    //         <input onChange={(e) => {setName(e.target.value)}}>
            
    //         </input>
    //         <label>Cover Image URL </label>2
    //         <input onChange={(e) => {setCov(e.target.value)}}>
            
    //         </input>
    // </div>)
}

// {
//     id: 7,
//     title: 'Art & Perception',
//     category: 'art',
//     subCategory: ['skill', 'design', 'passion'],
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     authorName: 'User 1',
//     authorAvatar: '/assets/images/user.jpg',
//     createdAt: 'December 29, 2022',
//     cover: '/assets/images/art.jpg',
//   },

  /* <div className="form-group">
      <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
      <select multiple className="form-control" id="exampleFormControlSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div> */