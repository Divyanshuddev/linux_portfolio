import { IconButton, Stack, Typography } from "@mui/material"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import { useDispatch, useSelector } from "react-redux";
import { closeWindow, minimizeWindow } from "../../features/WindowSlice/WindowSlice";
import type { RootState } from "../../store/Store";
const styles = {
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}
interface HeaderProps {
    onToggleResize: () => void;
}
const Header = ({ onToggleResize }: HeaderProps) => {
    const dispatch=useDispatch();
    const isMaximized = useSelector((state:RootState)=>state.windowresize.isMaximized)
    const handleResume=()=>{
        window.open('https://drive.google.com/file/d/1DHnYxWIXCfEaSc4k-QlTQpowC01FokBa/view?usp=sharing','_blank')
    }
    return (
        <Stack sx={styles.root} direction={'row'}>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={2}>
                <Stack>
                    <Typography sx={{color:"white"}}>1 of 1</Typography>
                </Stack>
                <EditOutlinedIcon sx={{color:"white"}} />
            </Stack>
            <Typography sx={{color:"white"}}>Divyanshu-Sharma-Resume.pdf</Typography>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'}>
                <IconButton onClick={()=>handleResume()}>
                    <SaveOutlinedIcon sx={{color:"white"}} />
                </IconButton>
                <IconButton onClick={()=>dispatch(minimizeWindow('Resume'))}>
                    <MinimizeIcon sx={{color:"white"}} fontSize="small" />
                </IconButton>
                <IconButton onClick={() => onToggleResize()}>
                    {
                        isMaximized? <CropSquareSharpIcon sx={{color:"white"}} fontSize="small" />:<FilterNoneSharpIcon sx={{color:"white"}} fontSize="small" />
                    }
                   
                </IconButton>
                <IconButton onClick={()=>dispatch(closeWindow("Resume"))}>
                    <CloseIcon sx={{color:"white"}} fontSize="small" />
                </IconButton>

            </Stack>
        </Stack>
    )
}
export default Header