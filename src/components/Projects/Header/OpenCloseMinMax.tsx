import { IconButton, Stack } from "@mui/material"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
const styles={
    root:{
        display:"flex",
        alignItems:"center"
    },
    icon:{
        color:"whitesmoke",
        width:14,
        height:14
    },
    iconButton:{
        "&:hover":{
            backgroundColor:"#575757"
        }
    }
}
const data=[
    {
        title:"Minimize",
        icon:<MinimizeIcon sx={styles.icon} />
    },
    {
        title:"MiniWindow",
        icon:<CropSquareSharpIcon sx={styles.icon} />
    },
    {
        title:"MaxiWindow",
        icon:<FilterNoneSharpIcon sx={styles.icon} />
    },
    {
        title:"Close",
        icon:<CloseIcon sx={styles.icon} />
    },
]
interface OpenCloseMinMaxProps{
    onToggleResize:()=>void;
}
const OpenCloseMinMax =({onToggleResize}:OpenCloseMinMaxProps)=>{
    return(
        <Stack direction={'row'} sx={styles.root}>
            {
                data.map((value,index)=>{
                    return(
                        <IconButton key={index} sx={styles.iconButton} onClick={()=>onToggleResize()}>
                            {value.icon}
                        </IconButton>
                    )
                })
            }
        </Stack>
    )
}
export default OpenCloseMinMax