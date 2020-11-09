import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import { Col, Row, Container, Image } from 'react-bootstrap';

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
      <Container>
          <h2>Our Blog</h2>
          <p>Infomration about violence, women and health. Read different topics < br />
              that contribute positivley to the mental health of women.</p>
          <SearchBar />
          {blogs.map( (blog) =>{
            return (
              <div> 
                <span
              className="blogBody"
              dangerouslySetInnerHTML={{
                __html: blog.content.rendered,
              }}
            ></span>
                {/* {blog.content.rendered} */}
              <Container>
              {/* <Image src={blog.post.jetpack_featured_media_url} className="blogImage" /> */}
              <h3>{blog.title.rendered}</h3>
              </Container>
              </div>
            )
          }
          )}
    </Container>
  );
}
