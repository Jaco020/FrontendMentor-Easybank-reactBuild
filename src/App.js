import React,{useState} from 'react';
import Navbar from "./components/nav/Navbar";
import Hero from "./components/heroCont/hero";
import Feature from "./components/featuresCont/Feaure";
import Article from "./components/Article/Article";
import Footer from "./components/footer/Footer";
function App() {
  const [click, setClick] = useState(false)
  return (
    <div className={click ? "app--blocked": "app"}>
      <Navbar pClick={click} pSetClick={setClick}/>
      <Hero pClick={click}/>
      <Feature/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
