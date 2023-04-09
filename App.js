import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import ProductsScreen from "./ProductsScreen";

let App = () =>{
  return (
    <>
      <h2>App Component</h2>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <ProductsScreen/>
    </>
  )
};

export default App;
