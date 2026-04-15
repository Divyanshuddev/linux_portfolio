import { Stack } from "@mui/material"
import linuxWallImage from '../../assets/linux_wall_bg.avif'
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import StatusBarPanel from "../StatusBarPanel/StatusBarPanel"
import { useRef, useState } from "react"
import ProjectsWindow from "../Projects/ProjectsWindow"
import ResumeWindow from "../Resume/ResumeWindow"
import TerminalWindow from "../Terminal/TerminalWindow"
import AboutMeWindow from "../AboutMe/AboutMeWindow"
import VLCWindow from "../VLC/VLCWindow"
import MusicWindow from "../Music/MusicWindow"
import ImageViewerWindow from "../ImageViewer/ImageViewerWindow"
import AllAppsWindow from "../AllApps/AllAppsWindow"
const styles = {
    root: {
        width: "96vw",
        height: "97vh",
        boxSizing: "border-box",
        backgroundImage: `url(${linuxWallImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
    }
}
const LinuxWall = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const windowIds = [1, 2, 3, 4, 5, 6, 7, 8];
    const [zOrder, setZOrder] = useState<number[]>(windowIds);
    const bringToFront = (id: number) => {
        setZOrder((z) => [...z.filter((x) => x !== id), id]);
    };
    const getWindowPosition = (index: number) => ({
        top: 100 + index * 20,
        left: 150 + index * 20,
    });
    const statusBarPanel = useSelector((state: RootState) => state.statusbarpanel.statusBarPanel)
    const projectWindow = useSelector((state: RootState) => state.window.projectWindow)
    const resumeWindow = useSelector((state: RootState) => state.window.resumeWindow)
    const terminalWindow = useSelector((state: RootState) => state.window.terminalWindow)
    const aboutMeWindow = useSelector((state: RootState) => state.window.aboutMeWindow)
    const vlcWindow = useSelector((state: RootState) => state.window.vlcWindow)
    const musicWindow = useSelector((state: RootState) => state.window.musicWindow)
    const imageWindow = useSelector((state: RootState) => state.window.imageWindow)
    const allAppsWindow = useSelector((state: RootState) => state.window.allAppsWindow)
    return (
        <Stack sx={styles.root} >
            {statusBarPanel && <StatusBarPanel />}
            {
                projectWindow && (
                    <ProjectsWindow
                        id={1}
                        containerRef={containerRef}
                        zIndex={zOrder.indexOf(1) + 1}
                        bringToFront={bringToFront}
                        defaultPosition={getWindowPosition(0)}
                    />
                )
            }
            {
                resumeWindow && (
                    <ResumeWindow
                        id={2}
                        containerRef={containerRef}
                        zIndex={zOrder.indexOf(2) + 1}
                        bringToFront={bringToFront}
                        defaultPosition={getWindowPosition(1)}
                    />
                )
            }
            {
                terminalWindow && (
                    <TerminalWindow
                        id={3}
                        containerRef={containerRef}
                        zIndex={zOrder.indexOf(3) + 1}
                        bringToFront={bringToFront}
                        defaultPosition={getWindowPosition(2)}
                    />
                )
            }
            {
                aboutMeWindow && (
                    <AboutMeWindow
                        id={4}
                        containerRef={containerRef}
                        zIndex={zOrder.indexOf(4) + 1}
                        bringToFront={bringToFront}
                        defaultPosition={getWindowPosition(3)}
                    />
                )
            }
            {
                vlcWindow && (
                    <VLCWindow
                        id={5}
                        containerRef={containerRef}
                        zIndex={zOrder.indexOf(5) + 1}
                        bringToFront={bringToFront}
                        defaultPosition={getWindowPosition(4)}
                    />
                )
            }
            {
                musicWindow && (
                    <MusicWindow
                        id={6}
                        containerRef={containerRef}
                        zIndex={zOrder.indexOf(6) + 1}
                        bringToFront={bringToFront}
                        defaultPosition={getWindowPosition(5)}
                    />
                )
            }
            {
                imageWindow && (
                    <ImageViewerWindow
                        id={7}
                        containerRef={containerRef}
                        zIndex={zOrder.indexOf(7) + 1}
                        bringToFront={bringToFront}
                        defaultPosition={getWindowPosition(6)}
                    />
                )
            }
            {
                allAppsWindow && (
                    <AllAppsWindow
                        id={8}
                        containerRef={containerRef}
                        zIndex={zOrder.indexOf(8) + 1}
                        bringToFront={bringToFront}
                        defaultPosition={getWindowPosition(7)}
                    />
                )
            }
        </Stack>
    )
}
export default LinuxWall