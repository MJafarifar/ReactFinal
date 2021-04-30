
import React, { useState, useEffect } from "react";
import {Button,Container,Card} from 'react-bootstrap';
import Axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      'https://fakestoreapi.com/products'
    );
    const products = data;
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container>
    <div className="row col-12">
      {products.map((product,i) => (
        <Card className="col-3 mr-1 mb-1" key={i}>
        <Card.Img variant="top" src={product.image} style={{display: 'flex', height:200}}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <hr/>
          <Card.Text>  Category : {product.category}</Card.Text>
          <Card.Text> Price: {product.price}</Card.Text>
        
          <Card.Link href={"/ProductDetail/" + product.id}> Link</Card.Link>
        </Card.Body>
      </Card>
      ))}
    </div>
    </Container>
  );
        
}