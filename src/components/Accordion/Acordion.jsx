import React, { useState } from "react";
import "./styles.css";
import { products } from "../../utils/data";

export function Accordion ({value}) {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  
  const {itemsToBuy, preCart, setCart } = value;

  
  const handleOpen = () => {
    setShow(!show);
  };
  

  const addToCart = () => {
    setCart(...preCart)
  };

  return (
    <div id="contenedor-accordian" className="accContainer">
      <div id="accordian" className="accordian">
        <div id="accordian-header" className="accordian-header" onClick={handleOpen}>
          <div id="">¿Qué quieres comer hoy?</div>
          <div className="sign">{show ? '-' : '+'}</div>
          </div>
            {show && (
              <div className="accordian-body">
                {products.map((e,i)=>{return  <div 
                                                className="accButton"
                                                key={i}
                                                id={`product-${i}`}>
                                                <p> {e.name} </p>
                                                <div className="accordian__product-quantity">
                                                <button onClick={()=>{itemsToBuy(true,e,i,products)}}> + </button>
                                                <p>
                                                  { preCart.length > 0 ? 
                                                    preCart.map(search=>{ if (search.name===e.name){ return search.amount } else return 0 }) :
                                                    0 }
                                                </p>
                                                <button onClick={()=>{itemsToBuy(false,e,i,products)}}> - </button>
                                                </div>
                                              </div>
                })}
              <button id="addToCart" onClick={addToCart}>Añadir e ir al carrito</button> 
              </div>
            )}
          </div>
    </div>
  );
}