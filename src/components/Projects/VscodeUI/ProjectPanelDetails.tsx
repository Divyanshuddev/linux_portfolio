import { Box, Divider, IconButton, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../../store/Store"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useState } from "react";
interface ProjectPanelDetailsProps {
    details: string;
    images: string[];
}
const ProjectPanelDetails = ({ details, images }: ProjectPanelDetailsProps) => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const [currentImage, setCurrentImage] = useState<number>(0);
    const styles = {
        root: {
            width: isMaximized ? "50vw" : "76vw",
            boxSizing: "border-box",
            paddingLeft: 15,
            paddingRight: 10,
            paddingTop: 3
        },
        details: {
            color: "gray"
        },
        detailStack: {
        },
        projectDetails: {
            color: "whitesmoke"
        },
        image: {
            width: isMaximized ? 500 : 700,
            height: isMaximized ? 250 : 400,
        },
        arrow: {
            color: "white",
            width: 40,
            height: 40,
        }
    }
    const handleBackwardImage = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1)
        }
        else {
            setCurrentImage(currentImage - 1)
        }
    }
    const handleForwardImage = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0)
        }
        else {
            setCurrentImage(currentImage + 1)
        }
    }
    useEffect(() => {
        setCurrentImage(0)
    }, [details])
    return (
        <Stack sx={styles.root} spacing={2}>
            <Stack spacing={1}>
                <Typography sx={styles.details}>DETAILS</Typography>
                <Divider sx={{ backgroundColor: "gray" }} />
            </Stack>
            <Typography sx={styles.projectDetails}>{details}</Typography>
            <Stack sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }} direction={'row'} spacing={2}>
                <IconButton onClick={() => handleBackwardImage()}>
                    <ArrowBackIosNewOutlinedIcon sx={styles.arrow} />
                </IconButton>
                <Box component={'img'} src={images[currentImage]} sx={styles.image} />
                <IconButton onClick={() => handleForwardImage()}>
                    <ArrowForwardIosOutlinedIcon sx={styles.arrow} />
                </IconButton>
            </Stack>
        </Stack>
    )
}
export default ProjectPanelDetails