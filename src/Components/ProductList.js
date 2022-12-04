import React from 'react'
import {PRODUCTS} from './Shared/Products';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

const productList = PRODUCTS;

export default function ProductList() {
  return (
    <div>
      <h1>Purchase your moblie Pone</h1>
      <h1>Product Information</h1>
      <div>
        <Container>
        
        {
            productList.map( (product)=> {
            return(
                <div>
                    <Row xs="2">
                    <Col className="bg-light border">
                         <img src={product.images} alt="Girl in a jacket" width="500" height="600"></img>
                    </Col>
                    <Col className="bg-light border">
                        <div id = {product.id}>
                            <h1>{product.brand}</h1>
                            <h1>{product.product}</h1>
                            <h1>{product.color}</h1>
                            <h1>{product.GB}</h1>
                            <h1>{product.price}</h1>
                        </div>
                    </Col>
                    </Row>
                </div>

            )
            })
        }
     
        </Container>

      </div>
    </div>
  )
}
