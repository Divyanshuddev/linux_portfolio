import { IconButton, Stack } from "@mui/material"
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import FilterNoneSharpIcon from '@mui/icons-material/FilterNoneSharp';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/Store";
import { closeWindow, minimizeWindow } from "../../../features/WindowSlice/WindowSlice";
const styles = {
    root: {
        display: "flex",
        alignItems: "center"
    },
    icon: {
        color: "whitesmoke",
        width: 14,
        height: 14
    },
    iconButton: {
        "&:hover": {
            backgroundColor: "#575757"
        }
    }
}

interface OpenCloseMinMaxProps {
    onToggleResize: () => void;
}
const OpenCloseMinMax = ({ onToggleResize }: OpenCloseMinMaxProps) => {
    const dispatch = useDispatch();
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    return (
        <Stack direction={'row'} sx={styles.root}>
            <IconButton onClick={()=>dispatch(minimizeWindow('Projects'))}>
                <MinimizeIcon sx={{ color: "white" }} fontSize="small" />
            </IconButton>
            <IconButton onClick={() => onToggleResize()}>
                {
                    isMaximized ? <CropSquareSharpIcon sx={{ color: "white" }} fontSize="small" /> : <FilterNoneSharpIcon sx={{ color: "white" }} fontSize="small" />
                }

            </IconButton>
            <IconButton onClick={() => dispatch(closeWindow("Projects"))}>
                <CloseIcon sx={{ color: "white" }} fontSize="small" />
            </IconButton>

        </Stack>
    )
}
export default OpenCloseMinMax