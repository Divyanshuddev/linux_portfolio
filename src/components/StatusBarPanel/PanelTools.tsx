import { Grid, Stack, Typography } from "@mui/material"
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BoltIcon from '@mui/icons-material/Bolt';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import { useDispatch, useSelector } from "react-redux";
import { statusBarPanelTools } from "../../features/StatusBarPanel/StatusBarPanelSlice";
import type { RootState } from "../../store/Store";
import SignalWifiOffSharpIcon from '@mui/icons-material/SignalWifiOffSharp';
const styles = {
    root: {
        width:"100%"
    },
    button: {
        border: "none",
        width:"100%",
        padding: 2,
        display:"flex",
        borderRadius:8,
        "&:hover":{
            cursor:"pointer"
        }
    },
    container:{
        display:"flex",
        alignItems:"center"
    },
    text:{
        color:"white"
    }
}
const PanelTools = () => {
    const dispatch = useDispatch()
    const wifi=useSelector((state:RootState)=>state.statusbarpanel.wifi)
    const bluetooth=useSelector((state:RootState)=>state.statusbarpanel.bluetooth)
    const powerMode=useSelector((state:RootState)=>state.statusbarpanel.powerMode)
    const nightLight=useSelector((state:RootState)=>state.statusbarpanel.nightLight)
    const airplaneMode=useSelector((state:RootState)=>state.statusbarpanel.airplaneMode)
    const doNotDisturb=useSelector((state:RootState)=>state.statusbarpanel.doNotDisturb)
    const data = [
    {
        title: "Wi-Fi",
        icon: <NetworkWifiIcon sx={{ color: "white" }} />,
        status:wifi
    },
    {
        title: "Bluetooth",
        icon: <BluetoothIcon sx={{ color: "white" }} />,
        status:bluetooth
    },
    {
        title: "Power Mode",
        icon: <BoltIcon sx={{ color: "white" }} />,
        status:powerMode
    },
    {
        title: "Night Light",
        icon: <Brightness4OutlinedIcon sx={{ color: "white" }} />,
        status:nightLight
    },
    {
        title: "Airplane Mode",
        icon: <AirplanemodeActiveOutlinedIcon sx={{ color: "white" }} />,
        status:airplaneMode
    },
    {
        title: "Do Not Disturb",
        icon: <NotificationsOffOutlinedIcon sx={{ color: "white" }} />,
        status:doNotDisturb
   },
]
    return (
        <Grid container sx={styles.root} direction={'row'} spacing={2}>
            {
                data.map((value, index) => {
                    return (
                        <Grid size={6} key={index}>
                            <Stack component={'button'} sx={styles.button} style={{backgroundColor:value.status?"#d34615":"#303030"}}  onClick={()=>dispatch(statusBarPanelTools(value.title))}>
                                <Stack direction={'row'} sx={styles.container}  spacing={1}>
                                    {value.title==='Wi-Fi'&&value.status===false?<SignalWifiOffSharpIcon sx={{ color: "white" }} />:value.icon}
                                <Typography sx={styles.text}>{value.title}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
export default PanelTools