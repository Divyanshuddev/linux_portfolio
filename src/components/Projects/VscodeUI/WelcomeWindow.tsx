import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../../store/Store"
import vsCodeIcon from '../../../assets/vscode_logo.png'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { SourceControlIcon } from "./SourceControlIcon";
import ConnectToIcon from "./ConnectToIcon";
const data = [
    {
        title: "New File...",
        icon: <NoteAddOutlinedIcon />
    },
    {
        title: "Open File...",
        icon: <FileOpenOutlinedIcon />
    },
    {
        title: "Open Folder...",
        icon: <FolderOpenOutlinedIcon />
    },
    {
        title: "Clone Git Repository...",
        icon: <SourceControlIcon />
    },
    {
        title: "Connect To...",
        icon: <ConnectToIcon />
    },
]

const WelcomeWindow = () => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const selectedMenuBar = useSelector((state: RootState) => state.projects.selectedMenuBar)

    const styles = {
        root: {
            width: isMaximized ? "50vw" : "76vw",
            height: isMaximized ? "73.5vh" : "90.5vh",
            backgroundColor: "#1f1f1f"
        },
        navBar: {
            width: isMaximized ? "50vw" : "76vw",
            heigth: "5vh",
            backgroundColor: "#181818",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        welcomeFile: {
            width: 160,
            height: "5vh",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#1f1f1f",
            borderTop: "2px solid #1976d2"
        },
        vsCodeIcon: {
            width: 30,
            height: 30
        },
        welcomeText: {
            color: "white"
        },
        vsCodeWelcomeFile: {
            boxSizing: "border-box",
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 15,
            paddingBottom: 5,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
        },
        vsCodeEditorStack: {

        },
        vsCode: {
            color: "whitesmoke",
            fontSize: 50,
        },
        editing: {
            color: "whitesmoke",
            fontSize: 16
        },
        start: {
            color: "#8e9498",
            fontSize: 18
        },
        button: {
            textTransform: "capitalize",
            "&:hover": {
                backgroundColor: "transparent"
            },
            alignSelf: "flex-Start"
        },
        details: {
            color: "whitesmoke",
            fontSize: 15
        },
    }
    return (
        <Stack sx={styles.root} style={{display:selectedMenuBar==="Extensions"?"none":""}}>
            <Stack sx={styles.navBar} direction={'row'}>
                <Stack sx={styles.welcomeFile} direction={'row'}>
                    <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'}>
                        <Box component={'img'} src={vsCodeIcon} sx={styles.vsCodeIcon} />
                        <Typography sx={styles.welcomeText}><i>Welcome</i></Typography>
                    </Stack>
                    <IconButton>
                        <CloseSharpIcon fontSize="small" sx={{ color: "gray" }} />
                    </IconButton>
                </Stack>
                <Stack sx={{ display: "flex", alignItems: "center", boxSizing: "border-box", paddingRight: 1 }} direction={'row'} spacing={1}>
                    <SpaceDashboardOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
                    <MoreHorizOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
                </Stack>
            </Stack>
            <Stack sx={styles.vsCodeWelcomeFile} direction={'row'}>
                <Stack spacing={4}>
                    <Stack spacing={0}>
                        <Typography sx={styles.vsCode}>VSCode</Typography>
                        <Typography sx={styles.editing}>Editing evolved</Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ alignSelf: "flex-start" }}>
                        <Typography sx={styles.start}>Start</Typography>
                        {
                            data.map((value, index) => {
                                return (
                                    <Button key={index} variant="text" startIcon={value.icon} color="primary" disableElevation disableFocusRipple disableRipple disableTouchRipple sx={styles.button}>{value.title}</Button>
                                )
                            })
                        }
                    </Stack>
                </Stack>
                <Stack sx={{ my: 9 }}>
                    <Typography sx={styles.editing}>Recent</Typography>
                    <Typography sx={styles.details}>You have no recent folders,<a style={{ color: "#1976d2" }}>open a folder </a>to start.</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default WelcomeWindow