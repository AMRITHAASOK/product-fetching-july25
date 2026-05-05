import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
        name:'wishlist',
        initialState:{
            items:[] // all product save 
        },
        reducers:{
            //action
            //Add to wishlist
            addToWishlist(state,action){
                const product = action.payload
                const existingProduct = state.items.find((item)=>item.id===product.id)
                if(existingProduct){
                    alert("product already existing...")
                }
                else{
                    state.items.push(product)
                    alert("product added")
                }
            },
            deleteProduct(state,action){
                const productId = action.payload
                return  {...state,items:state.items.filter(item=>item.id!==productId)}

            }
        }

})
export const {addToWishlist,deleteProduct} = wishlistSlice.actions
export default wishlistSlice.reducer