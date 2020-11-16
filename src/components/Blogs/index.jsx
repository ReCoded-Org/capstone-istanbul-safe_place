import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./index.scss";
import SearchBar from "../../components/SearchBar";

const POSTS_PER_PAGE = 9;
const BLOG_API_URL = `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?per_page=${POSTS_PER_PAGE}`;

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    const data = await fetch(BLOG_API_URL);
    const fetchedBlogPosts = await data.json();
    setBlogPosts(fetchedBlogPosts);
    // console.log(fetchedBlogPosts)
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  console.log(blogPosts)


  // const [searchBlogs, setSearchBlogs] = useState(blogPosts);

  const handleSearch = (e, keyword) => {
    //console.log(keyword)
    e.preventDefault();

    const filterPost = blogPosts.filter(blog => {
      console.log(blog)
      const blogTitle = blog.title.rendered
      console.log(blogTitle)
      const results = blogTitle.toLowerCase().includes(keyword.toLowerCase());
      console.log(results)
      return results

    })
    console.log(filterPost)
    setBlogPosts(filterPost)

  };

  return (
    <Container>
      <SearchBar handleSearch={handleSearch}/>
      {blogPosts.map((blogPost) => 
      { 
        return (
          <div className="blogsSection">
            <div className="shadowEffect"></div>
            <h3
              className="blogPostTitle"
              dangerouslySetInnerHTML={{
                __html: blogPost.title.rendered,
              }}
            ></h3>
            <img
              className="blogPostImg"
              alt="Blog post cover"
              src={blogPost.jetpack_featured_media_url}
            />
          </div>
        );
      }
      )}
    </Container>
  );
}
