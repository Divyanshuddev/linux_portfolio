import { createSlice } from "@reduxjs/toolkit";

export interface WindowSliceState{
    projectWindow:boolean;
    resumeWindow:boolean;
    terminalWindow:boolean;
    aboutMeWindow:boolean;
}

const initialState:WindowSliceState={
    projectWindow:false,
    resumeWindow:false,
    terminalWindow:false,
    aboutMeWindow:false
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
                case 'Resume':
                    state.resumeWindow=true
                    return
                case 'Terminal':
                    state.terminalWindow=true
                    return
                case 'About me':
                    state.aboutMeWindow=true
                    return
                default:
                    return
            }
        },
    }
})

export const {openWindow} = windowSlice.actions
export default windowSlice.reducer