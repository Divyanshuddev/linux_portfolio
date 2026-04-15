import { IconButton, Stack, Typography } from "@mui/material"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/Store";
import { closeWindow, minimizeWindow } from "../../features/WindowSlice/WindowSlice";
const styles={
    root:{
        dsplay:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
}
interface HeaderProps{
     onToggleResize:()=>void;
}
const Header =({onToggleResize}:HeaderProps)=>{
     const dispatch=useDispatch();
    const isMaximized = useSelector((state:RootState)=>state.windowresize.isMaximized)
    return(
        <Stack sx={styles.root} direction={'row'}>
            <Stack />
            <Typography sx={{color:"white"}}>VLC</Typography>
             <Stack sx={{display:"flex",alignItems:"center"}} direction={'row'} spacing={0.5}>
             <IconButton onClick={()=>dispatch(minimizeWindow("VLC"))}>
                    <MinimizeIcon fontSize="small" sx={{color:"white"}} />
                </IconButton>
                <IconButton onClick={()=>onToggleResize()} >
                      {
                        isMaximized? <CropSquareSharpIcon sx={{color:"white"}} fontSize="small" />:<FilterNoneSharpIcon sx={{color:"white"}} fontSize="small" />
                    }
                </IconButton>
                <IconButton onClick={()=>dispatch(closeWindow("VLC"))}>
                    <CloseIcon  fontSize="small" sx={{color:"white"}}/>
                </IconButton>
        </Stack>
        </Stack>
    )
}
export default Header