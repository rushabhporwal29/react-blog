import {useEffect, useState} from 'react';
import BlogList from './BlogLists';
import useFetch from './useFetch';

const Home = () => {

    // const [name,setName]= useState('mario');
    // const [age,setAge]= useState(25) 
    // const handleClick = ()=>{
    //     setName('luigi');
    //     setAge(30);
    // };
    // const handleClickAgain= (e,name)=>{
    //     console.log("Hello "+name,e.target);
    //     setName('mario');
    //     setAge(25)
    // }
    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=> blog.id!==id);
    //     setBlogs(newBlogs); 
    // }

    const {data: blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">

             {/* <h2>HomePage</h2> */}
            {/* <p>{name}</p>
            <button onClick={()=>{setName("luigi")}}>Click Me</button> */}
            {/* <button onClick={(e)=>handleClickAgain(e,"Rushabh")}>Click Again</button> */}
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}


            {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='Geek')} title="Geek's Blogs" handleDelete={handleDelete}/>             */}

        </div>
     );
}
 
export default Home;