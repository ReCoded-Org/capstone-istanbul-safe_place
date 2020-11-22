import React from "react";
import { Col, Card } from "react-bootstrap";
import "./index.scss";

const BlogCard = ({ blogPost }) => {
  return (
    <Col md={4}>
      <Card className="blogPost">
        <Card.Img variant="top" src={blogPost.jetpack_featured_media_url} />
        <Card.Body>
          <Card.Title
            className="blogPostTitle"
            dangerouslySetInnerHTML={{
              __html: blogPost.title.rendered,
            }}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
