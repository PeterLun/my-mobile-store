import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from 'react';
import {Button, Badge} from 'reactstrap';
import { CartContext } from "./CartContext";


export default function QuanityBtn({productInfo}) {

    const {cartItems, setCartItems} = useContext(CartContext);

    const productIndexInCart = cartItems.findIndex((element)=>{
        return element.Id === productInfo.id;
    }) 
 

    const [NumInCart, setNumInCart ] = useState(
        (productIndexInCart === -1) ? 0 : cartItems[productIndexInCart].quantity
    );



    const handlerAdd = () => {
        if(productIndexInCart === -1){
             setCartItems(
                [{
                        Id : productInfo.id,
                        brand : productInfo.brand,
                        product : productInfo.product,
                        image : productInfo.image,
                        price : productInfo.price,
                        color : productInfo.color,
                        quantity:1
                    }, 
                    ...cartItems]
                )  
        }
        else{

            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity ++
            setCartItems(newCartArray)
        }


        setNumInCart(NumInCart + 1)
    };

    const handlerMinus = () => {

         if(cartItems[productIndexInCart].quantity === 1){
            let newCartArray =[...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)

        }
        else{
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        } 
        setNumInCart(NumInCart - 1)
    }

    return(
        <div>
               <span>
                    {
                        (NumInCart === 0)?
                        <span onClick={handlerAdd}>
                            <h3><Badge>Buy</Badge></h3>
                        </span>:
                        <div>
                            <Button color="danger" onClick={handlerAdd}>+</Button>
                            {" "} {NumInCart}{" "} 
                            <Button color="danger" onClick={handlerMinus}>-</Button>
                        </div>
                    }
                </span>
        </div>
    )
} 