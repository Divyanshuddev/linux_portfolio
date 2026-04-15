import { IconButton, Stack, Typography } from "@mui/material"
import NewTerminalIcon from "./NewTerminalIcon";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import { useDispatch, useSelector } from "react-redux";
import { closeWindow, minimizeWindow } from "../../features/WindowSlice/WindowSlice";
import type { RootState } from "../../store/Store";
const styles={
    root:{
        display:"flex",
        alignItems:'center',
        justifyContent:"space-between"
    },
    button:{
        backgroundColor:"#474746",
        borderRadius:"10%",
        padding:0.3,
        "&:hover":{
            backgroundColor:"#474746"
        }
    },
}
interface HeaderProps {
    onToggleResize: () => void;
}
const Header=({ onToggleResize }: HeaderProps)=>{
    const dispatch=useDispatch();
    const isMaximized = useSelector((state:RootState)=>state.windowresize.isMaximized)
    return(
        <Stack sx={styles.root} direction={'row'}>
            <IconButton sx={styles.button}>
            <NewTerminalIcon />
            </IconButton>
            <Typography sx={{color:"white"}}>Terminal</Typography>
            <Stack sx={{display:"flex",alignItems:"center"}} direction={'row'} spacing={0.5}> 
                <IconButton sx={styles.button}  >
                    <SearchOutlinedIcon fontSize="small" sx={{color:"white"}} />
                </IconButton>
                <IconButton sx={styles.button}>
                    <MenuOutlinedIcon fontSize="small" sx={{color:"white"}} />
                </IconButton>
                <IconButton onClick={()=>dispatch(minimizeWindow('Terminal'))}>
                    <MinimizeIcon fontSize="small" sx={{color:"white"}} />
                </IconButton>
                <IconButton onClick={()=>onToggleResize()} >
                    {
                        isMaximized? <CropSquareSharpIcon sx={{color:"white"}} fontSize="small" />:<FilterNoneSharpIcon sx={{color:"white"}} fontSize="small" />
                    }
                </IconButton>
                <IconButton onClick={()=>dispatch(closeWindow("Terminal"))}>
                    <CloseIcon  fontSize="small" sx={{color:"white"}}/>
                </IconButton>
            </Stack>
        </Stack>
    )
}
export default Header