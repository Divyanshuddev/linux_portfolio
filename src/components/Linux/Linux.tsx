import { Stack } from "@mui/material"
import LinuxHeader from "../LinuxHeader/LinuxHeader"
import LinuxNav from "../LinuxNav/LinuxNav"
import LinuxWall from "../LinuxWall/LinuxWall"
const styles={
    root:{
        backgroundColor:"black",
        width:"100vw",
        height:"100vh"
    },
    wallStyle:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    }
}
const Linux= ()=>{
    return(
        <Stack sx={styles.root}>
            <LinuxHeader />
            <Stack sx={styles.wallStyle}>
            <LinuxNav />
            <LinuxWall />
            </Stack>
        </Stack>
    )
}
export default Linux