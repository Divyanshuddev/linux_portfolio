import { createSlice } from "@reduxjs/toolkit";

export interface WindowSliceState {
    projectWindow: boolean;
    resumeWindow: boolean;
    terminalWindow: boolean;
    aboutMeWindow: boolean;
    vlcWindow: boolean;
    musicWindow: boolean;
    imageWindow: boolean;
    minimizeProjectWindow: boolean;
    minimizeResumeWindow: boolean;
    minimizeTerminalWindow: boolean;
    minimizeAboutMeWindow: boolean;
    minimizeVlcWindow: boolean;
    minimizeMusicWindow: boolean;
    minimizeImageWindow: boolean;
    allAppsWindow:boolean;

}

const initialState: WindowSliceState = {
    projectWindow: false,
    resumeWindow: false,
    terminalWindow: false,
    aboutMeWindow: false,
    vlcWindow: false,
    musicWindow: false,
    imageWindow: false,
    minimizeProjectWindow: false,
    minimizeResumeWindow: false,
    minimizeTerminalWindow: false,
    minimizeAboutMeWindow: false,
    minimizeVlcWindow: false,
    minimizeMusicWindow: false,
    minimizeImageWindow: false,
    allAppsWindow:false,

}

export const windowSlice = createSlice({
    name: "window",
    initialState,
    reducers: {
        openWindow: (state, action) => {
            switch (action.payload) {
                case 'Projects':
                    state.projectWindow = true
                    state.allAppsWindow=false
                    return
                case 'Resume':
                    state.resumeWindow = true
                    state.allAppsWindow=false
                    return
                case 'Terminal':
                    state.terminalWindow = true
                    state.allAppsWindow=false
                    return
                case 'About me':
                    state.aboutMeWindow = true
                    state.allAppsWindow=false
                    return
                case 'VLC':
                    state.vlcWindow = true
                    state.allAppsWindow=false
                    return
                case 'Music':
                    state.musicWindow = true
                    state.allAppsWindow=false
                    return
                case 'Image Viewer':
                    state.imageWindow = true
                    state.allAppsWindow=false
                    return
                case 'Github':
                    window.open('https://github.com/Divyanshuddev','_blank')
                    state.allAppsWindow=false
                    return
                case 'Linkedin':
                    window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/','_blank')
                    state.allAppsWindow=false
                    return
                case 'Whatsapp':
                    window.open('https://api.whatsapp.com/send/?phone=%2B918303006600&text&type=phone_number&app_absent=0','_blank')
                    state.allAppsWindow=false
                    return
                default:
                    return
            }
        },
        closeWindow: (state, action) => {
            switch (action.payload) {
                case 'Projects':
                    state.projectWindow = false
                    return
                case 'Resume':
                    state.resumeWindow = false
                    return
                case 'Terminal':
                    state.terminalWindow = false
                    return
                case 'About me':
                    state.aboutMeWindow = false
                    return
                case 'VLC':
                    state.vlcWindow = false
                    return
                case 'Music':
                    state.musicWindow = false
                    return
                case 'Image Viewer':
                    state.imageWindow = false
                    return
                default:
                    return
            }
        },
        minimizeWindow: (state, action)=> {
            switch (action.payload) {
                case 'Projects':
                    state.minimizeProjectWindow = true
                    return
                case 'Resume':
                    state.minimizeResumeWindow = true
                    return
                case 'Terminal':
                    state.minimizeTerminalWindow = true
                    return
                case 'About me':
                    state.minimizeAboutMeWindow = true
                    return
                case 'VLC':
                    state.minimizeVlcWindow = true
                    return
                case 'Music':
                    state.minimizeMusicWindow = true
                    return
                case 'Image Viewer':
                    state.minimizeImageWindow = true
                    return
                default:
                    return
            }
        },
        offMinimizeWindow: (state, action) => {
            switch (action.payload) {
                case 'Projects':
                    state.minimizeProjectWindow = false
                    return
                case 'Resume':
                    state.minimizeResumeWindow = false
                    return
                case 'Terminal':
                    state.minimizeTerminalWindow = false
                    return
                case 'About me':
                    state.minimizeAboutMeWindow = false
                    return
                case 'VLC':
                    state.minimizeVlcWindow = false
                    return
                case 'Music':
                    state.minimizeMusicWindow = false
                    return
                case 'Image Viewer':
                    state.minimizeImageWindow = false
                    return
                default:
                    return
            }
        },
        openAllAppsWindow:(state)=>{
            state.allAppsWindow=!state.allAppsWindow
        }
    }
})

export const { openWindow, closeWindow, minimizeWindow,offMinimizeWindow ,openAllAppsWindow} = windowSlice.actions
export default windowSlice.reducer