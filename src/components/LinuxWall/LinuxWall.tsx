import { Stack } from "@mui/material"
import linuxWallImage from '../../assets/linux_wall_bg.avif'
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import StatusBarPanel from "../StatusBarPanel/StatusBarPanel"
const styles={
    root:{
        width:"96vw",
        height:"97vh",
        boxSizing:"border-box",
        backgroundImage:`url(${linuxWallImage})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        position:"relative"
    }
}
const LinuxWall = ()=>{
    const statusBarPanel = useSelector((state:RootState)=>state.statusbarpanel.statusBarPanel)
    return(
        <Stack sx={styles.root}>
            {statusBarPanel && <StatusBarPanel />}
        </Stack>
    )
}
export default LinuxWall