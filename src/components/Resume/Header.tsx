import { IconButton, Stack, Typography } from "@mui/material"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
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
                <IconButton>
                    <MinimizeIcon sx={{color:"white"}} fontSize="small" />
                </IconButton>
                <IconButton onClick={() => onToggleResize()}>
                    <CropSquareSharpIcon sx={{color:"white"}} fontSize="small" />
                </IconButton>
                <IconButton>
                    <CloseIcon sx={{color:"white"}} fontSize="small" />
                </IconButton>

            </Stack>
        </Stack>
    )
}
export default Header