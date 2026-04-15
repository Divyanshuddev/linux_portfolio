import { createSlice } from "@reduxjs/toolkit";

export interface MediaSliceState{
    playPauseVideo:boolean;
    currentVideoIndex:number;
     playPauseMusic:boolean;
    currentMusicIndex:number;
    currentImageIndex:number,
}

const initialState:MediaSliceState={
    playPauseVideo:true,
    currentVideoIndex:0,
    playPauseMusic:true,
    currentMusicIndex:0,
    currentImageIndex:0
}

export const mediaSlice =createSlice({
    name:"media",
    initialState,
    reducers:{
        backwardVideo:(state)=>{
            state.playPauseVideo=true
            if(state.currentVideoIndex===0){
                state.currentVideoIndex=3
            }
            else{
                state.currentVideoIndex=state.currentVideoIndex-1
            }
        },
        forwardVideo:(state)=>{
            state.playPauseVideo=true
            if(state.currentVideoIndex===3){
                state.currentVideoIndex=0
            }else{
                state.currentVideoIndex=state.currentVideoIndex+1
            }
        },
        playPauseVideo:(state,action)=>{
            state.playPauseVideo=action.payload
        },
         backwardMusic:(state)=>{
            state.playPauseMusic=true
            if(state.currentMusicIndex===0){
                state.currentMusicIndex=3
            }
            else{
                state.currentMusicIndex=state.currentMusicIndex-1
            }
        },
        forwardMusic:(state)=>{
            state.playPauseMusic=true
            if(state.currentMusicIndex===3){
                state.currentMusicIndex=0
            }else{
                state.currentMusicIndex=state.currentMusicIndex+1
            }
        },
        playPauseMuisc:(state,action)=>{
            state.currentMusicIndex=action.payload
        },
        backwardImage:(state)=>{
            
            if(state.currentImageIndex===0){
                state.currentImageIndex=3
            }
            else{
                state.currentImageIndex=state.currentImageIndex-1
            }
        },
        forwardImage:(state)=>{
            
            if(state.currentImageIndex===3){
                state.currentImageIndex=0
            }else{
                state.currentImageIndex=state.currentImageIndex+1
            }
        },
    }
})

export const {backwardVideo,forwardVideo,playPauseVideo,backwardMusic,forwardMusic,playPauseMuisc,backwardImage,forwardImage} = mediaSlice.actions
export default mediaSlice.reducer