import { createSlice } from "@reduxjs/toolkit";

export interface ProjectSliceState{
    selectedMenuBar:string;
    selectedProject:number;
}

const initialState:ProjectSliceState={
    selectedMenuBar:"Extensions",
    selectedProject:1
}

export const projectSlice=createSlice({
    name:"projects",
    initialState,
    reducers:{
        selectMenuBar:(state,action)=>{
            state.selectedMenuBar = action.payload
        },
        selectProject:(state,action)=>{
            state.selectedProject=action.payload
        }
    }
})

export const {selectMenuBar,selectProject} = projectSlice.actions
export default projectSlice.reducer