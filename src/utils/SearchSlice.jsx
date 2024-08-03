import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name:'search',
    initialState:{
        cache:{}
    },
    reducers:{
        UpdateCache:(state,action)=>{
            const [key,value] = action.payload;

            state.cache = {...state.cache,[`${key}`]:value};
        }
    }
})

export const {UpdateCache} = SearchSlice.actions;

export default SearchSlice.reducer;