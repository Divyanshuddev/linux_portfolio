import { Stack } from "@mui/material"
import NetworkWifi2BarIcon from '@mui/icons-material/NetworkWifi2Bar';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Battery30Icon from '@mui/icons-material/Battery30';
const styles = {
    root:{
        backgroundColor:"transparent",
        border:"none",
        display:"flex",
        alignItems:"center",
        boxSizing:"border-box",
        height:"3vh",
        paddingLeft:1.8,
        paddingRight:1.8,
        justifyContent:"center",
        borderRadius:7,
        "&:hover":{
            backgroundColor:"#4d4d4d"
        }
    },
    icons:{
        color:"white",
        width:17,
        height:17
    }
}
const StatusBar = ()=>{
    return(
        <Stack sx={styles.root} component={'button'} direction={'row'} spacing={1}>
            <NetworkWifi2BarIcon fontSize="small" sx={styles.icons} />
            <VolumeUpIcon fontSize="small" sx={styles.icons} />
            <Battery30Icon fontSize="small" sx={styles.icons} />
        </Stack>
    )
}
export default StatusBar