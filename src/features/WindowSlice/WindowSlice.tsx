import { createSlice } from "@reduxjs/toolkit";

export interface WindowSliceState{
    projectWindow:boolean;
}

const initialState:WindowSliceState={
    projectWindow:false,
}

export const windowSlice = createSlice({
    name:"window",
    initialState,
    reducers:{
        openWindow:(state,action)=>{
            switch(action.payload){
                case 'Projects':
                    state.projectWindow=true
                    return
                default:
                    return
            }
        },
    }
})

export const {openWindow} = windowSlice.actions
export default windowSlice.reducer