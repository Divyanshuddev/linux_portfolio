import { Box, IconButton, Stack } from "@mui/material"
import musicImg1 from '../../assets/Music/music1.png'
import musicImg2 from '../../assets/Music/music2.png'
import musicImg3 from '../../assets/Music/music3.png'
import musicImg4 from '../../assets/Music/music4.png'
import music1 from '../../assets/Music/music01.mp3'
import music2 from '../../assets/Music/music02.mp3'
import music3 from '../../assets/Music/music03.mp3'
import music4 from '../../assets/Music/music04.mp3'
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { backwardMusic, forwardMusic } from "../../features/WindowSlice/MediaSlice"
import NotStartedIcon from '@mui/icons-material/NotStarted';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
const musicData = [
    {
        image: musicImg1,
        music: music1
    },
    {
        image: musicImg2,
        music: music2
    },
    {
        image: musicImg3,
        music: music3
    },
    {
        image: musicImg4,
        music: music4
    },
]

const MusicPanel = () => {
    const dispatch = useDispatch();
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const currentMusic = useSelector((state: RootState) => state.media.currentMusicIndex)
    const styles = {
        root: {
            backgroundColor: "#2c2c2c",
            width: isMaximized ? "20vw" : "96vw",
            height: isMaximized ? "60vh" : "97vh",
            display: "flex",
            alignItems: "center",
        },
        image: {
            width: 300,
            height: 300,
        },
        icon: {
            width: 50,
            height: 50,
            color: "white"
        }
    }
    const handleToggle = () => {
        if (isPlaying) {
            audioRef?.current?.pause();
        } else {
            audioRef?.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <Stack sx={styles.root}>
            <Stack spacing={3} sx={{ paddingTop: 2 }}>
                <Box component={'img'} src={musicData[currentMusic].image} sx={styles.image} />
                <audio ref={audioRef} src={musicData[currentMusic].music} autoPlay />
                <Stack direction={'row'} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={() => dispatch(backwardMusic())}>
                        <SkipPreviousIcon sx={styles.icon} />
                    </IconButton>
                    <IconButton onClick={() => handleToggle()} >
                        <NotStartedIcon sx={styles.icon} />
                    </IconButton>
                    <IconButton onClick={() => dispatch(forwardMusic())}>
                        <SkipNextIcon sx={styles.icon} />
                    </IconButton>
                </Stack>
                <Stack direction={'row'} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton>
                        <ShuffleIcon sx={styles.icon} />
                    </IconButton>
                    <IconButton>
                        <PlaylistPlayIcon sx={styles.icon} />
                    </IconButton>
                    <IconButton>
                        <VolumeUpIcon sx={styles.icon} />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default MusicPanel