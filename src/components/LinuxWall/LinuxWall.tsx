import { Stack } from "@mui/material"
import linuxWallImage from '../../assets/linux_wall_bg.avif'
const styles={
    root:{
        width:"96vw",
        height:"97vh",
        boxSizing:"border-box",
        backgroundImage:`url(${linuxWallImage})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
}
const LinuxWall = ()=>{
    return(
        <Stack sx={styles.root}>

        </Stack>
    )
}
export default LinuxWall