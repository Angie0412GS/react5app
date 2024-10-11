import React from "react";
import ProfileCard from "./componentes/ProfileCard";
import ProductCard from "./componentes/ProductCard";
import Card from "./componentes/Card";
import Header from './componentes/Header';
import './index2.css';


function App() {
  return (
    <div>
      <center><h1>PERFIL</h1></center>
      <ProfileCard/>
    </div>
  );
}

export default App;

function App2() {
  return (
    <div>
      <h1>Tienda de Productos</h1>
      <ProductCard />
    </div>
  );
}

//export default App2;

function App3() {
  return (
    <div>
      <center><h1>CSS Modules</h1></center>
      <Card />
    </div>
  );
}

//export default App3;

function App4() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
    </div>
  );
}

//export default App4;
