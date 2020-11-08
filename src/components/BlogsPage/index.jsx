import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const URL =
    "https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts";

  const fetchBlogs = async () => {
    const data = await fetch(URL);
    //console.log(data)
    const fetchedBlogs = await data.json();
    setBlogs(fetchedBlogs);
    console.log(fetchedBlogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
      <div>
          <h2>Our Blog</h2>
          <p>Infomration about violence, women and health. Read different topics < br />
              that contribute positivley to the mental health of women.</p>
          <SearchBar />
          {blogs.map( blog => 
              <div>
                  <div>{blog.slug}</div>
                  <div></div>
                  <div></div>
              </div>
          )}
    </div>
  );
}
