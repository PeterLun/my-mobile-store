import React from 'react'
import {PRODUCTS} from './Shared/Products';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';



const productList = PRODUCTS;

const handleClick = () =>{
  console.log("Buy now");
}


export default function ProductList() {


  return (
    <>

      <h1>Moblie Shopping Mall</h1>

        <Container className='sm'>
        {
          productList.map(product=>(
            <div key = {product.id}>
                <Row xs="2">
                <Col className="bg-light border">

            
                 <Link to={"/ProductDetail/"+product.id} >
                    <img src={process.env.PUBLIC_URL+'/'+product.images} alt={product.product} width="400" height="400"></img>
                  </Link>
                </Col>
                <Col className="bg-light border">
                
                        <h1>{product.brand}</h1>
                        <h3>{product.product}</h3>
                        <h3>{product.color}</h3>
                        <h3>{product.GB}</h3>
                        <h3>{product.price}</h3>
                    
                </Col>
                </Row>
            </div>
          ))
        }
        </Container>
      </>
  );
}
