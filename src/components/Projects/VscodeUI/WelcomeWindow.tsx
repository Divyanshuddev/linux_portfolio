import { Box, IconButton, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../../store/Store"
import vsCodeIcon from '../../../assets/vscode_logo.png'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
const WelcomeWindow =()=>{
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles={
    root:{
        width:isMaximized ? "50vw":"76vw",
        height: isMaximized ? "73.5vh" : "90.5vh",
        backgroundColor:"#1f1f1f"
    },
    navBar:{
        width:isMaximized ? "50vw":"76vw",
        heigth:"5vh",
        backgroundColor:"#181818",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    },
    welcomeFile:{
        width:160,
        height:"5vh",
        boxSizing:"border-box",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#1f1f1f",
    },
    vsCodeIcon:{
        width:30,
        height:30
    },
    welcomeText:{
        color:"white"
    },
    icons:{
        
    }
}
    return(
        <Stack sx={styles.root}>
            <Stack sx={styles.navBar} direction={'row'}>
                <Stack sx={styles.welcomeFile} direction={'row'}>
                    <Stack sx={{display:"flex",alignItems:"center"}} direction={'row'}>
                    <Box component={'img'} src={vsCodeIcon} sx={styles.vsCodeIcon} />
                    <Typography sx={styles.welcomeText}><i>Welcome</i></Typography>
                    </Stack>
                    <IconButton>
                        <CloseSharpIcon fontSize="small" sx={{color:"gray"}} />
                    </IconButton>
                </Stack>
                <Stack sx={{display:"flex",alignItems:"center",boxSizing:"border-box",paddingRight:1}} direction={'row'} spacing={1}>
                    <SpaceDashboardOutlinedIcon fontSize="small" sx={{color:"gray"}} />
                    <MoreHorizOutlinedIcon fontSize="small" sx={{color:"gray"}} />
                </Stack>
            </Stack>
        </Stack>
    )
}
export default WelcomeWindow