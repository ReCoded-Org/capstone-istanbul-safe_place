import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import img1 from "../../images/violence-test-image1.png"
import img2 from "../../images/violence-test-image2.png"
import img3 from "../../images/violence-test-image3.png"
import "./ViolenceTest.css"

const ViolenceTest = () => {
  return (
    <div className="violence-intro">
    <Container fluid="md" >
      <Row className="justify-content-md-center">
        <Col >
          <img src={img1} alt="img1"/>
        </Col>
        <Col  >
         <Row >
         <Col ><img src={img2} alt="img2" />  </Col>
         <Col ><img src={img3} alt="img3" /> </Col>
        </Row>
        <Row >
        <Col >
          <h2>What is violance against women?</h2>
          <p>According to the first article of the Declaration on the Prevention of Violence Against Women, adopted by the United Nations General Assembly in 1993; It is the threat or coercion of any kind of gender-based violence or act that results in or is likely to result in physical, sexual and emotional harm to women in the public and private spheres, and arbitrarily restricting freedom.</p>
          <div className="violence-test">
           <h5>Are you in an abusive relationship? <span>Take our test</span></h5>
          <Button> Find out now</Button> </div>
          </Col>
          </Row>
         </Col>
       </Row>
     </Container>
     </div>


    // <div className="violence-intro">
    //   <img src={img1} alt="img1" className="violence-img"/>
    //   <div className="second-section">
    //     <div className="violence-images">
    //     <img src={img2} alt="img2" /> 
    //      <img src={img3} alt="img3" /> 
    //      </div>
    //      <div className="violence-test">
    //      <h2>What is violance against women?</h2>
    //       <p>According to the first article of the Declaration on the Prevention of Violence Against Women, adopted by the United Nations General Assembly in 1993; It is the threat or coercion of any kind of gender-based violence or act that results in or is likely to result in physical, sexual and emotional harm to women in the public and private spheres, and arbitrarily restricting freedom.</p>
    //      <div><h5>Are you in an abusive relationship? <span>Take our test</span></h5>
    //   <Button> Find out now</Button> </div>
    //       </div> 
    //   </div>
    // </div>

 


    
     

  );
};

export default ViolenceTest;
