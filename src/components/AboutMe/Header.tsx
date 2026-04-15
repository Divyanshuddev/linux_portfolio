import { IconButton, Stack, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
const styles={
    root:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",

    }
}
interface HeaderProps{
    onToggleResize:()=>void;
}
const Header=({onToggleResize}:HeaderProps)=>{
    return(
        <Stack sx={styles.root} direction={'row'}>
           <IconButton>
            <MenuOutlinedIcon  fontSize="small" sx={{color:"white"}} />
        </IconButton> 
        <Typography sx={{color:"white"}}>About Me</Typography>
        <Stack sx={{display:"flex",alignItems:"center"}} direction={'row'} spacing={0.5}>
             <IconButton >
                    <MinimizeIcon fontSize="small" sx={{color:"white"}} />
                </IconButton>
                <IconButton onClick={()=>onToggleResize()} >
                    <CropSquareSharpIcon fontSize="small" sx={{color:"white"}} />
                </IconButton>
                <IconButton >
                    <CloseIcon  fontSize="small" sx={{color:"white"}}/>
                </IconButton>
        </Stack>
        </Stack>
    )
}
export default Header