import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
     initialState:{
            items:[] // all product save 
        },
        reducers:{
            addTocart(state,action){
                  const product = action.payload
                const existingProduct = state.items.find((item)=>item.id===product.id)
                if(existingProduct){
                    alert("product already existing...")
                }
                else{
                    state.items.push({...product,quantity:1,totalPrice:product.price})
                    alert("product added")
                }
            },
            deleteProduct(state,action){
                const productId = action.payload
                return  {...state,items:state.items.filter(item=>item.id!==productId)}

            },
            incrementcart(state,action){
                const product=action.payload
               const existingProduct = state.items.find((item)=>item.id===product.id)

               existingProduct.quantity++
               existingProduct.totalPrice=
               existingProduct.quantity*existingProduct.price;

            },
            decrementCart(state,action){
                const product=action.payload
               const existingProduct = state.items.find((item)=>item.id===product.id)
                if(existingProduct.quantity>0){
                     existingProduct.quantity--
               
               existingProduct.totalPrice=
               existingProduct.quantity*existingProduct.price;
                }
                else{
                    existingProduct.quantity=0
                }

            }
            
        }
})

export const {addTocart,deleteProduct,incrementcart,decrementCart} = cartSlice.actions
export default cartSlice.reducer