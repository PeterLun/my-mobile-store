import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from 'react-router-dom';
import {PRODUCTS} from './Shared/Products';
import { Container, Row, Col } from "reactstrap";
import QuanityBtn from './QuanityBtn';
function ProductDetail() {


  let productInfo= useParams("id");
  const product = PRODUCTS.filter(  p=>p.id===parseInt(productInfo.id,10)  )[0]; 

  return (
      <div keu ={product.id}>
        <Container>
        <Row xs="2">
          <Col>
              <img src={process.env.PUBLIC_URL+'/'+product.images} alt={product.product} width="500" height="600"></img>
            </Col>
            <Col>
            <div>
              <h1>{product.brand}</h1>
              <h1>{product.product}</h1>
              <h1>{product.price}</h1>
              <h1>{product.color}</h1>
                

            </div>
            <QuanityBtn productInfo = {product}/>
            </Col>
        </Row> 
        </Container>

        <h1>
           <div><Link to="/Product">Back to Product List</Link></div>
        </h1>

      </div>
  );
}


export default ProductDetail;