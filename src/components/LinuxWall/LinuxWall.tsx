import { Stack } from "@mui/material"
import linuxWallImage from '../../assets/linux_wall_bg.avif'
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import StatusBarPanel from "../StatusBarPanel/StatusBarPanel"
import { useRef, useState } from "react"
import ProjectsWindow from "../Projects/ProjectsWindow"
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
        </Stack>
    )
}
export default LinuxWall