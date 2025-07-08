import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { useEffect, useState } from 'react';
import { CORE_CONSEPTS } from './productList';
import Card from './components/productCard';
import { Back } from './components/backToTop';
import { Footer } from './components/footer';
import { Second_page } from './pages/productDetails';

function App() {
  const[productList, setProductList] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data)=>{
        setProductList(data["products"])
      });
  }, [])
  return (
    <div id ="top">
      <Navbar />
      <div style={{ display: "flex", margin: "30px", gap: "25px" ,flexWrap:"wrap"}}>
       {productList.map((obj)=>(
         <Card {...obj}/>
       ))}
      </div>

      <Back/>
      <Footer/>

    </div>
  );
}

export default App;
