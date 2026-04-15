import { Box, IconButton, Stack } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import myPhoto1 from '../../assets/MyPhoto/MyPhoto1.jpg'
import myPhoto2 from '../../assets/MyPhoto/MyPhoto2.jpg'
import myPhoto3 from '../../assets/MyPhoto/MyPhoto3.jpg'
import myPhoto4 from '../../assets/MyPhoto/MyPhoto4.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { backwardImage, forwardImage } from "../../features/WindowSlice/MediaSlice"
const myPhotosList = [
    myPhoto1, myPhoto2, myPhoto3, myPhoto4
]
const ImageViewerPanel = () => {
    const dispatch = useDispatch()
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const currentImageIndex = useSelector((state: RootState) => state.media.currentImageIndex)
    const styles = {
        root: {
            width: isMaximized ? "50vw" : "96vw",
            height: isMaximized ? "70vh" : "97vh",
            boxSizing: "border-box",
            paddingTop: 1,
            paddingLeft: 2,
            paddingRight: 2,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        image: {
            width: 500,
            height: 500,
            objectFit: "contain"
        },
        iconButton: {
            backgroundColor: "#474746",
            borderRadius: "10%",
            padding: 2,
            "&:hover": {
                backgroundColor: "#474746"
            }
        }
    }
    return (
        <Stack sx={styles.root} direction={'row'}>
            <IconButton sx={styles.iconButton} onClick={() => dispatch(backwardImage())}>
                <ArrowBackIosNewIcon sx={{ color: "white" }} fontSize="large" />
            </IconButton>
            <Box component={'img'} src={myPhotosList[currentImageIndex]} sx={styles.image} />
            <IconButton sx={styles.iconButton} onClick={() => dispatch(forwardImage())}>
                <ArrowForwardIosIcon sx={{ color: "white" }} fontSize="large" />
            </IconButton>
        </Stack>
    )
}
export default ImageViewerPanel