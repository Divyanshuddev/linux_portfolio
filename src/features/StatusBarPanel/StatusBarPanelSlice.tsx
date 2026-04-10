import { createSlice } from "@reduxjs/toolkit";

export interface StatusBarPanelState{
    statusBarPanel:boolean;
    wifi:boolean;
    bluetooth:boolean;
    powerMode:boolean;
    nightLight:boolean;
    airplaneMode:boolean;
    doNotDisturb:boolean;
    mute:boolean;
}

const initialState:StatusBarPanelState={
    statusBarPanel:false,
    wifi:true,
    bluetooth:false,
    powerMode:false,
    nightLight:false,
    airplaneMode:false,
    doNotDisturb:false,
    mute:false,
}

export const statusBarPanelSlice = createSlice({
    name:"statusbarpanel",
    initialState,
    reducers:{
        openCloseStatusBarPanel:(state)=>{
            state.statusBarPanel=!state.statusBarPanel
        },
        statusBarPanelTools:(state,action)=>{
            switch(action.payload){
                case 'Github':
                    window.open('https://github.com/Divyanshuddev',"_blank")
                    return
                case 'LinkedIn':
                    window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/',"_blank")
                    return
                case 'Whatsapp':
                    window.open('https://api.whatsapp.com/send/?phone=%2B918303006600&text&type=phone_number&app_absent=0',"_blank")
                    return
                case 'Power':
                    return
                case 'Wi-Fi':
                    state.wifi=!state.wifi
                    state.airplaneMode=false
                    return
                case 'Bluetooth':
                    state.bluetooth=!state.bluetooth
                    return
                case 'Power Mode':
                    state.powerMode = !state.powerMode
                    return
                case 'Night Light':
                    state.nightLight = !state.nightLight
                    return
                case 'Airplane Mode':
                    state.airplaneMode = !state.airplaneMode
                    state.wifi=false
                    return
                case 'Do Not Disturb':
                    state.doNotDisturb= !state.doNotDisturb
                    return
                default:
                    return
            }
        },
        muteAudio:(state)=>{
            state.mute=true
        },
        unMuteAudio:(state)=>{
            state.mute=false
        }
    }
}) 

export const {openCloseStatusBarPanel,statusBarPanelTools,muteAudio,unMuteAudio} = statusBarPanelSlice.actions
export default statusBarPanelSlice.reducer