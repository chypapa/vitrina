import React from "react"
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Shop } from "./components/Shop"; 

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Shop/>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
