import { IconButton, Stack, Typography } from "@mui/material"
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import MenuIcon from '@mui/icons-material/Menu';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/Store";
import { closeWindow, minimizeWindow } from "../../features/WindowSlice/WindowSlice";
const styles = {
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: "#474746",
        borderRadius: "10%",
        padding: 0.3,
        "&:hover": {
            backgroundColor: "#474746"
        }
    },
}
interface HeaderProps {
    onToggleResize: () => void;
}
const Header = ({ onToggleResize }: HeaderProps) => {
    const dispatch = useDispatch();
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    return (
        <Stack sx={styles.root} direction={'row'}>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={0.5}>
                <IconButton sx={styles.button}>
                    <ZoomOutIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
                <IconButton sx={styles.button}>
                    <Typography sx={{ color: "white", fontSize: 13.5 }}>100%</Typography>
                </IconButton>
                <IconButton sx={styles.button}>
                    <ZoomInIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
            </Stack>
            <Typography sx={{ color: "white" }}>Image Viewer</Typography>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={0.5}>
                <IconButton sx={styles.button}>
                    <MenuIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
                <IconButton onClick={() => dispatch(minimizeWindow('Image Viewer'))}>
                    <MinimizeIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
                <IconButton onClick={() => onToggleResize()} >
                    {
                        isMaximized ? <CropSquareSharpIcon sx={{ color: "white" }} fontSize="small" /> : <FilterNoneSharpIcon sx={{ color: "white" }} fontSize="small" />
                    }
                </IconButton>
                <IconButton onClick={() => dispatch(closeWindow("Image Viewer"))}>
                    <CloseIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
            </Stack>
        </Stack>
    )
}
export default Header