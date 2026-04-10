import { Stack } from "@mui/material"
import Activity from "./Activity"
import Time from "./Time"
import StatusBar from "./StatusBar"
const styles={
    root:{
        width:"100vw",
        height:"3vh",
        boxSizing:"border-box",
        backgroundColor:"#1B211A",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
}
const LinuxHeader = ()=>{
    return(
        <Stack sx={styles.root}>
            <Activity />
            <Time />
            <StatusBar />
        </Stack>
    )
}
export default LinuxHeader