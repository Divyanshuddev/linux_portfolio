import { IconButton, Stack } from "@mui/material"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import { useDispatch } from "react-redux";
import { closeWindow, minimizeWindow } from "../../features/WindowSlice/WindowSlice";
const styles = {
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    }
}
interface HeaderProps {
    onToggleResize: () => void;
}
const Header = ({ onToggleResize }: HeaderProps) => {
    const dispatch = useDispatch();
    return (
        <Stack sx={styles.root} direction={'row'}>
            <IconButton onClick={() => dispatch(minimizeWindow('Music'))}>
                <MinimizeIcon sx={{ color: "white" }} fontSize="small" />
            </IconButton>
            <IconButton onClick={() => onToggleResize()} disabled>
                <CropSquareSharpIcon sx={{ color: "white" }} fontSize="small" />
            </IconButton>
            <IconButton onClick={() => dispatch(closeWindow("Music"))}>
                <CloseIcon sx={{ color: "white" }} fontSize="small" />
            </IconButton>
        </Stack>
    )
}
export default Header