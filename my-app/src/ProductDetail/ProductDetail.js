import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import {ListGroup,ListGroupItem,Card,Image, Row, Col} from 'react-bootstrap';

const ProductDetail = (props) => { 
  const {id} = useParams();
  const [ProductItem, setProductItem] = useState([]);
  useEffect(() => {
          fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((result)=> setProductItem(result));
            
      },[]);
 
  return (
   
    <Row>
       <Col>
         <Image src={ProductItem.image}rounded  style={{width: 500, height:400}}/>
       </Col>
      <Col>
      <Card >
      <Card.Body>
        <Card.Title>{ProductItem.title}</Card.Title>
        <Card.Text>
        {ProductItem.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{ProductItem.price} Rial</ListGroupItem>
        <ListGroupItem>{ProductItem.category}</ListGroupItem>
      </ListGroup>
    </Card>
    </Col>
  </Row>
     

  )
}

export default ProductDetail