import './App.css';
import {useEffect, useState} from 'react';

function App() {
   
let [products,setProducts]= useState([]);

  let getingProductsFromServer = async()=>{
    let reqOption ={
      method:"GET"
    }
    let JSONData =await fetch("https://api.escuelajs.co/api/v1/categories", reqOption);

    let JSOData = await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  };

  // useEffect(()=>{
  //   getingProductsFromServer();
  // },[])
  return (
    <div className="App">
      <button type="button" onClick={()=>{
        getingProductsFromServer();
      }}>Products</button>
      <div className='produtsContainer'>
      {products.map((ele,i)=>{
        return <div className='productDiv'>
          <img src={ele.image} className='productPicture' title={ele.description}></img>
          <p>{ele.title}</p>
          <p>{ele.id}</p>
          <p>{ele.creationAt}</p>
          <p>{ele.name}</p>
          <p>{ele.updatedAt}</p>
       </div>
      
      })}
      </div>
     
    </div>
  );
}

export default App;