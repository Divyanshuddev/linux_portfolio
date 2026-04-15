import { Box, Button, Grid, Input, Stack, Typography } from "@mui/material"
import ubuntuWall from '../../assets/linux_wall_bg.avif'
import resume from '../../assets/document_viewer.png'
import projects from '../../assets/visual-studio-code.png'
import terminal from '../../assets/terminalIcon.png'
import imageViever from '../../assets/imageIcon.png'
import vlc from '../../assets/vlc.png'
import musicPlayer from '../../assets/music_player.png'
import settingIcon from '../../assets/settingIcon.png'
import githubIcon from '../../assets/githubWhiteIcon.png'
import linkedinIcon from '../../assets/linkedIn.png'
import whatsappIcon from '../../assets/whatsapp.png'
import { useDispatch } from "react-redux"
import { openWindow } from "../../features/WindowSlice/WindowSlice"
const data = [
    {
        title: "About me",
        icon: settingIcon
    },
    {
        title: "Resume",
        icon: resume
    },
    {
        title: "Projects",
        icon: projects
    },
    {
        title: "Terminal",
        icon: terminal
    },

    {
        title: "VLC",
        icon: vlc
    },
    {
        title: "Music",
        icon: musicPlayer
    },
    {
        title: "Image Viewer",
        icon: imageViever
    },
    {
        title: "Github",
        icon: githubIcon
    },
    {
        title: "Linkedin",
        icon: linkedinIcon
    },
    {
        title: "Whatsapp",
        icon: whatsappIcon
    }
]
const styles = {
    root: {
        width: "96vw",
        height: "97vh",
        boxSizing: "border-box",
        paddingTop: 3,
        backgroundColor: "#222222"
    },
    input: {
        backgroundColor: "#353535",
        width: 400,
        padding: 1,
        paddingLeft: 3,
        color: "white",
        borderRadius: 6
    },
    ubuntuWall: {
        width: 400,
        heigth: 300,
        objectFit: "contain",
        alignSelf: "center",
        boxShadow: "1px 1px 7px black"
    },
    icon: {
        width: 70,
        height: 70,
    },
    button: {
        backgroundColor: "transparent",
        border: "none",
        display: "flex",
        alignItems: "center",
        borderRadius: 2,
        boxSizing: "border-box",
        padding: 1,
        paddingLeft: 2,
        paddingRight: 2,
        "&:hover": {
            backgroundColor: "#3b3a3a"
        },
    },
    title: {
        color: "whitesmoke",
        fontfamily: "Ubuntu"
    }
}
interface AllAppsPanelProps {
    toggleResize: () => void;
}
const AllAppsPanel = ({ toggleResize }: AllAppsPanelProps) => {
    const dispatch = useDispatch();
    return (
        <Stack sx={styles.root} spacing={5}>
            <Stack sx={{ alignSelf: "center" }}>
                <Input sx={styles.input} placeholder="Type to search" disableUnderline />
            </Stack>
            <Box component={'img'} src={ubuntuWall} sx={styles.ubuntuWall} />
            <Grid container sx={{ alignSelf: "center", width: 600 }} columnSpacing={1} rowSpacing={7}>
                {
                    data.map((value, index) => {
                        return (
                            <Grid size={3} key={index}>
                                <Stack component={'button'} sx={styles.button} spacing={1} onClick={() => dispatch(openWindow(value.title))}>
                                    <Box component={'img'} src={value.icon} sx={styles.icon} />
                                    <Typography sx={styles.title}>{value.title}</Typography>
                                </Stack>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Button onClick={() => toggleResize()} disabled></Button>
        </Stack>
    )
}
export default AllAppsPanel