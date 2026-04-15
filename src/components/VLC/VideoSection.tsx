import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import { Box, Stack } from "@mui/material"
import video1 from '../../assets/Videos/Video1.mp4'
import video2 from '../../assets/Videos/Video2.mp4'
import video3 from '../../assets/Videos/Video3.mp4'
import video4 from '../../assets/Videos/Video4.mp4'
import { useRef } from "react"
import VLCControllers from "./VLCControllers"
import { playPauseVideo } from "../../features/WindowSlice/MediaSlice"
const data = [video1, video2, video3, video4]
const VideoSection=()=>{
  const dispatch = useDispatch()
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles={
        root:{
            width:"100%",
            height:isMaximized?"63vh":"87vh"
        }
    }
    const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentVideoIndex = useSelector((state: RootState) => state.media.currentVideoIndex)
  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      dispatch(playPauseVideo(true))
    } else {
      video.pause();
       console.log(video);
      dispatch(playPauseVideo(false))
    }
    
  };
    return(
        <Stack sx={styles.root}>
            <Box
          component="video"
          key={data[currentVideoIndex]}
          ref={videoRef}
          autoPlay
          sx={{
            width: "100%",
            boxShadow: 3,
            bgcolor: "black",
           height:isMaximized?"60vh":"87vh"
          }}
        >
          <source src={data[currentVideoIndex]} type="video/mp4" />
        </Box>
        <VLCControllers handleToggle={handleToggle} />
        </Stack>
    )
}
export default VideoSection