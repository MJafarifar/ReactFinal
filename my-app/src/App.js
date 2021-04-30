import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from '../src/Products/Products';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductDetail from '../src/ProductDetail/ProductDetail';
import Login from '../src/Shared/Login/Login';
import Logout from '../src/Shared/Logout/logout';
import useToken from '../src/Shared/Auth/useToken';
import {Navbar,Nav,Container} from 'react-bootstrap';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Container>
    <div className="wrapper">
        <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
   
      <BrowserRouter>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/productDetail/:id">
            <ProductDetail />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </Container>
  );
}

export default App;