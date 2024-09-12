// import React,{createContext,useContext, useState} from 'react'
// const CartContext = createContext();
// export const CartProvider =  ({children})=>{
//     const [cart,setCart]=useState([]);

//     const addToCart=(item)=>{
//         setCart((prevCart)=>[...prevCart,item])
        
//     }
//     const removeFromCart =(itemToRemove)=>{
//         setCart((prevCart)=>prevCart.filter(item=>item.id !== itemToRemove.id))
//     }
//     return(
//         <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
//             {children}
//         </CartContext.Provider>
//     )

// }

// export const useCart = ()=>{
//     const context = useContext(CartContext);
//     if(!context)
//     {
//         throw new Error ('use cart is empty')
//     }
//     return context
// }

// export {CartContext}