import React from "react";
import Calculadora from "./componente/Calculadora";
import Header from "./componente/header/Header";
import Footer from "./componente/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Calculadora />
      <Footer />
    </div>
  );
}

export default App;
