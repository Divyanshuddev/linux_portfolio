import { Stack } from "@mui/material"
import NetworkWifi2BarIcon from '@mui/icons-material/NetworkWifi2Bar';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Battery30Icon from '@mui/icons-material/Battery30';
import { useDispatch, useSelector } from "react-redux";
import { openCloseStatusBarPanel } from "../../features/StatusBarPanel/StatusBarPanelSlice";
import type { RootState } from "../../store/Store";
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const styles = {
    root: {
        backgroundColor: "transparent",
        border: "none",
        borderColor: "transaprent",
        display: "flex",
        alignItems: "flex-end",
        width: 170,
    },
    main: {
        boxSizing: "border-box",
        width: "fit-content",
        paddingLeft: 1.8,
        paddingRight: 1.8,
        borderRadius: 7,
        height: "3vh",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "#4d4d4d",
            cursor: "pointer"
        }
    },
    icons: {
        color: "white",
        width: 17,
        height: 17
    },
    muteAudio: {
        color: "gray",
        width: 17,
        height: 17
    }
}
const StatusBar = () => {
    const dispatch = useDispatch()
    const wifi = useSelector((state: RootState) => state.statusbarpanel.wifi)
    const bluetooth = useSelector((state: RootState) => state.statusbarpanel.bluetooth)
    const airplaneMode = useSelector((state: RootState) => state.statusbarpanel.airplaneMode)
    const doNotDisturb = useSelector((state: RootState) => state.statusbarpanel.doNotDisturb)
    const mute = useSelector((state: RootState) => state.statusbarpanel.mute)
    return (
        <Stack sx={styles.root} component={'button'} onClick={() => dispatch(openCloseStatusBarPanel())}>
            <Stack direction={'row'} spacing={1} sx={styles.main} >
                <AirplanemodeActiveOutlinedIcon fontSize="small" sx={styles.icons} style={{ display: airplaneMode ? "block" : "none" }} />
                <NetworkWifi2BarIcon fontSize="small" sx={styles.icons} style={{ display: wifi ? "block" : "none" }} />
                <NotificationsOffOutlinedIcon fontSize="small" sx={styles.icons} style={{ display: doNotDisturb ? "block" : "none" }} />
                <BluetoothIcon fontSize="small" sx={styles.icons} style={{ display: bluetooth ? "block" : "none" }} />
                {mute ? <VolumeOffIcon fontSize="small" sx={styles.muteAudio} /> : <VolumeUpIcon fontSize="small" sx={styles.icons} />}
                <Battery30Icon fontSize="small" sx={styles.icons} />
            </Stack>
        </Stack>
    )
}
export default StatusBar