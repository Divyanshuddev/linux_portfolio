import { Stack, Typography } from "@mui/material"
import Battery30Icon from '@mui/icons-material/Battery30';
const styles ={
    root:{
        backgroundColor:"#303030",
        width:70,
        padding:1,
        display:"flex",
        justifyContent:"center",
        borderRadius:4
    },
    batteryContainer:{
        display:"flex",
        alignItems:"center"
    },
    icon:{
        color:"white",
        border:"none"
    },
    text:{
        color:"white",
    }
}
const BatteryIndicator = ()=>{
    return(
        <Stack sx={styles.root}>
            <Stack direction={'row'} sx={styles.batteryContainer} spacing={1} >
            <Battery30Icon sx={styles.icon} fontSize="medium"  />
            <Typography sx={styles.text}>30%</Typography>
            </Stack>
        </Stack>
    )
}
export default BatteryIndicator