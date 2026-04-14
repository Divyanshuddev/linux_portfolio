import { createSlice } from "@reduxjs/toolkit";

export interface ProjectSliceState{
    selectedMenuBar:string;
}

const initialState:ProjectSliceState={
    selectedMenuBar:"Extensions"
}

export const projectSlice=createSlice({
    name:"projects",
    initialState,
    reducers:{
        selectMenuBar:(state,action)=>{
            state.selectedMenuBar = action.payload
        }
    }
})

export const {selectMenuBar} = projectSlice.actions
export default projectSlice.reducer