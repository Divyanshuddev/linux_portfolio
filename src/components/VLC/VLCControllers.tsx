import { IconButton, Stack } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StopIcon from '@mui/icons-material/Stop';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import TuneIcon from '@mui/icons-material/Tune';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { useDispatch, useSelector } from "react-redux";
import { backwardVideo, forwardVideo } from "../../features/WindowSlice/MediaSlice";
import PauseIcon from '@mui/icons-material/Pause';
import type { RootState } from "../../store/Store";
const styles = {
    root: {
        display: "flex",
        alignItems: "center",
        height: "3vh",
        boxSizing: "border-box",
        backgroundColor: "#efefef",
        paddingLeft: 1.5,
        paddingTop: 0.3
    },
    buttonShape: {
        border: "1px solid #747474",
        borderRadius: "10%",
        padding: 0
    },
    icon: {
        color: "#747474",
    }
}
interface VLCControllersProps {
    handleToggle: () => void;
}
const VLCControllers = ({ handleToggle }: VLCControllersProps) => {
    const dispatch = useDispatch();
    const playPauseVideo = useSelector((state:RootState)=>state.media.playPauseVideo)
    return (
        <Stack sx={styles.root} direction={'row'} spacing={2}>
            <IconButton sx={styles.buttonShape} onClick={() => handleToggle()}>
                {
                    playPauseVideo?(
                        <PauseIcon fontSize="small" />
                    ):(
                        <PlayArrowIcon fontSize="small" />
                    )
                }
                
            </IconButton>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                <IconButton sx={styles.buttonShape} onClick={() => dispatch(backwardVideo())}>
                    <SkipPreviousIcon fontSize="small" />
                </IconButton>
                <IconButton sx={styles.buttonShape}>
                    <StopIcon fontSize="small" />
                </IconButton>
                <IconButton sx={styles.buttonShape} onClick={() => dispatch(forwardVideo())}>
                    <SkipNextIcon fontSize="small" />
                </IconButton>
            </Stack>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                <IconButton sx={styles.buttonShape}>
                    <FullscreenIcon fontSize="small" />
                </IconButton>
                <IconButton sx={styles.buttonShape}>
                    <PlaylistPlayIcon fontSize="small" />
                </IconButton>
            </Stack>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                <IconButton sx={styles.buttonShape}>
                    <ShuffleIcon fontSize="small" />
                </IconButton>
                <IconButton sx={styles.buttonShape}>
                    <TuneIcon fontSize="small" />
                </IconButton>
            </Stack>
        </Stack>
    )
}
export default VLCControllers