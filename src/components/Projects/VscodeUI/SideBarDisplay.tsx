import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../../store/Store"
import Explorer from "./Explorer"
import Search from "./Serach"
import SourceControl from "./SourceControl"
import RunDebug from "./RunDebug"
import Extensions from "./Extensions"

const SideBarDisplay = () => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const selectedMenuBar = useSelector((state: RootState) => state.projects.selectedMenuBar)
    const styles = {
        root: {
            width: "17vw",
            heigth: isMaximized ? "73.5vh" : "90.5vh",
            backgroundColor: "#181818",
            borderRight:"0.1px solid #3d3c3c"
        }
    }
    return (
        <Stack sx={styles.root}>
            <Explorer selectedMenuBar={selectedMenuBar} />
            <Search selectedMenuBar={selectedMenuBar} />
            <SourceControl selectedMenuBar={selectedMenuBar} />
            <RunDebug selectedMenuBar={selectedMenuBar} />
            <Extensions selectedMenuBar={selectedMenuBar} />
        </Stack>
    )
}
export default SideBarDisplay