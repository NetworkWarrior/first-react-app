import { useEffect, useState } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogsList blogs={blogs} />}
    </div>
  );
}
 
export default Home;