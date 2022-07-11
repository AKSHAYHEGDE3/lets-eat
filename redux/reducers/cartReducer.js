import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        foods : [],
        price:0
    },
    reducers:{
        addItem : (state,action)=>{
            const data = action.payload;
            const filterFood = state.foods.filter(food=>food.id === data.id)
            if(filterFood.length < 1){
            const quantity = 1
            const total_cost = quantity*data.price
                state.foods.push({...data,quantity,total_cost});
            } else {
                const index = state.foods.findIndex(food=>food.id===data.id);
                state.foods[index].quantity += 1;
                state.foods[index].total_cost += data.price 
            }
            state.price=state.foods.reduce((total,item)=>{
                return total+=item.total_cost
            },0);
        },
        deleteItem:(state,action)=>{
            const data = action.payload;
            const index = state.foods.findIndex(food=>food.id===data.id);
            if(state.foods[index].quantity > 1){
                state.foods[index].quantity -= 1
                state.foods[index].total_cost -= data.price
            } else{
                state.foods = state.foods.filter(food=>food.id !== data.id)
            }
            state.price=state.foods.reduce((total,item)=>{
                return total+=item.total_cost
            },0);
        }
    }

})

export const {addItem,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;