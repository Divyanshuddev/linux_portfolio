import { Box, Stack, Tooltip } from "@mui/material"
import resume from '../../assets/document_viewer.png'
import projects from '../../assets/vscode_logo.png'
import terminal from '../../assets/terminal.png'
import imageViever from '../../assets/image_viewer.jpg'
import vlc from '../../assets/vlc.png'
import musicPlayer from '../../assets/music_player.png'
import allApps from '../../assets/ubuntu_white_logo.png'
import { useDispatch } from "react-redux"
import { openWindow } from "../../features/WindowSlice/WindowSlice"
import settingIcon from '../../assets/settingIcon.png'
const data=[
    {
        title:"About me",
        icon:settingIcon
    },
    {
        title:"Resume",
        icon:resume
    },
    {
        title:"Projects",
        icon:projects
    },
    {
        title:"Terminal",
        icon:terminal
    },
    {
        title:"Image Viever",
        icon:imageViever
    },
    {
        title:"VLC",
        icon:vlc
    },
    {
        title:"Music",
        icon:musicPlayer
    },
    {
        title:"All Apps",
        icon:allApps
    },
]
const styles={
    root:{
        width:"4vw",
        height:"97vh",
        boxSizing:"border-box",
        backgroundColor:"#1B211A",
        display:"flex",
        alignItems:"center",
        paddingTop:2
    },
    upperMenu:{
        display:"flex", 
    },
    icon:{
        width:40,
        height:40
    },
    iconButton:{
        backgroundColor:"transparent",
        border:"none"
    },
    tooltip:{
        
    }
}
const LinuxNav =()=>{
    const dispatch = useDispatch();
    return(
        <Stack sx={styles.root}>
            <Stack direction={'column'} spacing={2} >
                {
                    data.map((value,index)=>{
                        return(
                            <Tooltip title={value.title} key={index} placement="right" sx={styles.tooltip} >
                            <Stack  component={'button'} sx={styles.iconButton} onClick={()=>dispatch(openWindow(value.title))}>
                                <Box component={'img'} src={value.icon} sx={styles.icon} />
                            </Stack>
                            </Tooltip>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}
export default LinuxNav