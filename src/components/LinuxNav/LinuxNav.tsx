import { Box, Stack, Tooltip } from "@mui/material"
import resume from '../../assets/document_viewer.png'
import projects from '../../assets/visual-studio-code.png'
import terminal from '../../assets/terminalIcon.png'
import imageViever from '../../assets/imageIcon.png'
import vlc from '../../assets/vlc.png'
import musicPlayer from '../../assets/music_player.png'
import allApps from '../../assets/ubuntu_white_logo.png'
import { useDispatch, useSelector } from "react-redux"
import { offMinimizeWindow, openAllAppsWindow, openWindow } from "../../features/WindowSlice/WindowSlice"
import settingIcon from '../../assets/settingIcon.png'
import type { RootState } from "../../store/Store"
const styles = {
    root: {
        width: "4vw",
        height: "97vh",
        boxSizing: "border-box",
        backgroundColor: "#1B211A",
        display: "flex",
        alignItems: "center",
        paddingTop: 2,
        justifyContent: "space-between"
    },
    upperMenu: {
        display: "flex",
    },
    icon: {
        width: 40,
        height: 40,
        objectFit: "contain"
    },
    iconButton: {
        backgroundColor: "transparent",
        border: "none",
        boxSizing: "border-box",
        padding: 1,

        borderRadius: 2,
        "&:hover": {
            backgroundColor: "#3b3a3a"
        },

    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "#d34615"
    }
}
const LinuxNav = () => {
    const dispatch = useDispatch();
    const minimizeProjectWindow = useSelector((state: RootState) => state.window.minimizeProjectWindow)
    const minimizeResumeWindow = useSelector((state: RootState) => state.window.minimizeResumeWindow)
    const minimizeTerminalWindow = useSelector((state: RootState) => state.window.minimizeTerminalWindow)
    const minimizeAboutMeWindow = useSelector((state: RootState) => state.window.minimizeAboutMeWindow)
    const minimizeVlcWindow = useSelector((state: RootState) => state.window.minimizeVlcWindow)
    const minimizeMusicWindow = useSelector((state: RootState) => state.window.minimizeMusicWindow)
    const minimizeImageWindow = useSelector((state: RootState) => state.window.minimizeImageWindow)
    const handleWindow = (title: string) => {
        switch (title) {
            case 'Projects':
                if (minimizeProjectWindow) {
                    dispatch(offMinimizeWindow(title))
                }
                else {
                    dispatch(openWindow('Projects'))
                }
                return
            case 'Resume':
                if (minimizeResumeWindow) {
                    dispatch(offMinimizeWindow(title))
                }
                else {
                    dispatch(openWindow('Resume'))
                }
                return
            case 'Terminal':
                if (minimizeTerminalWindow) {
                    dispatch(offMinimizeWindow(title))
                }
                else {
                    dispatch(openWindow('Terminal'))
                }
                return
            case 'About me':
                if (minimizeAboutMeWindow) {
                    dispatch(offMinimizeWindow(title))
                }
                else {
                    dispatch(openWindow('About me'))
                }
                return
            case 'VLC':
                if (minimizeVlcWindow) {
                    dispatch(offMinimizeWindow(title))
                }
                else {
                    dispatch(openWindow('VLC'))
                }
                return
            case 'Music':
                if (minimizeMusicWindow) {
                    dispatch(offMinimizeWindow(title))
                }
                else {
                    dispatch(openWindow('Music'))
                }
                return
            case 'Image Viewer':
                if (minimizeImageWindow) {
                    dispatch(offMinimizeWindow(title))
                }
                else {
                    dispatch(openWindow('Image Viewer'))
                }
                return
            case 'All Apps':
                dispatch(openAllAppsWindow())
                return
            default:
                return
        }
    }
    return (
        <Stack sx={styles.root}>
            <Stack direction={'column'} spacing={2} >
                <Tooltip title={'About me'} placement="right" >
                    <Stack component={'button'} sx={styles.iconButton} onClick={() => handleWindow('About me')}>
                        <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={0.2}>
                            <Stack sx={styles.dot} style={{ display: minimizeAboutMeWindow ? "" : "none" }} />
                            <Box component={'img'} src={settingIcon} sx={styles.icon} />
                        </Stack>
                    </Stack>
                </Tooltip>
                <Tooltip title={'Resume'} placement="right" >
                    <Stack component={'button'} sx={styles.iconButton} onClick={() => handleWindow('Resume')}>
                        <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} direction={'row'} spacing={0.2}>
                            <Stack sx={styles.dot} style={{ display: minimizeResumeWindow ? "" : "none" }} />
                            <Box component={'img'} src={resume} sx={styles.icon} />
                        </Stack>
                    </Stack>
                </Tooltip>
                <Tooltip title={'Projects'} placement="right" >
                    <Stack component={'button'} sx={styles.iconButton} onClick={() => handleWindow('Projects')}>
                        <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} direction={'row'} spacing={0.2}>
                            <Stack sx={styles.dot} style={{ display: minimizeProjectWindow ? "" : "none" }} />
                            <Box component={'img'} src={projects} sx={styles.icon} />
                        </Stack>
                    </Stack>
                </Tooltip>
                <Tooltip title={'Terminal'} placement="right" >
                    <Stack component={'button'} sx={styles.iconButton} onClick={() => handleWindow('Terminal')}>
                        <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} direction={'row'} spacing={0.2}>
                            <Stack sx={styles.dot} style={{ display: minimizeTerminalWindow ? "" : "none" }} />
                            <Box component={'img'} src={terminal} sx={styles.icon} />
                        </Stack>
                    </Stack>
                </Tooltip>
                <Tooltip title={'Image Viewer'} placement="right" >
                    <Stack component={'button'} sx={styles.iconButton} onClick={() => handleWindow('Image Viewer')}>
                        <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} direction={'row'} spacing={0.2}>
                            <Stack sx={styles.dot} style={{ display: minimizeImageWindow ? "" : "none" }} />
                            <Box component={'img'} src={imageViever} sx={styles.icon} />
                        </Stack>
                    </Stack>
                </Tooltip>
                <Tooltip title={'VLC'} placement="right" >
                    <Stack component={'button'} sx={styles.iconButton} onClick={() => handleWindow('VLC')}>
                        <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} direction={'row'} spacing={0.2}>
                            <Stack sx={styles.dot} style={{ display: minimizeVlcWindow ? "" : "none" }} />
                            <Box component={'img'} src={vlc} sx={styles.icon} />
                        </Stack>
                    </Stack>
                </Tooltip>
                <Tooltip title={'Music'} placement="right" >
                    <Stack component={'button'} sx={styles.iconButton} onClick={() => handleWindow('Music')}>
                        <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} direction={'row'} spacing={0.2}>
                            <Stack sx={styles.dot} style={{ display: minimizeMusicWindow ? "" : "none" }} />
                            <Box component={'img'} src={musicPlayer} sx={styles.icon} />
                        </Stack>
                    </Stack>
                </Tooltip>
            </Stack>
            <Stack>
                <Tooltip title={'All Apps'} placement="right" >
                    <Stack component={'button'} sx={styles.iconButton} onClick={() => handleWindow('All Apps')}>
                        <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}  >
                            <Box component={'img'} src={allApps} sx={styles.icon} />
                        </Stack>
                    </Stack>
                </Tooltip>
            </Stack>
        </Stack>
    )
}
export default LinuxNav