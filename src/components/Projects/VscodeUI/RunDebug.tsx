import { Button, Stack, Typography } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const styles={
    root:{
        boxSizing:"border-box",
        padding:2,
    },
    firstContainer:{
        displat:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    text:{
        color:"gray",
        fontSize:11
    },
    details:{
        color:"whitesmoke",
        fontSize:12
    },
    button:{
        textTransform:"capitalize",
        borderRadius:0,
    }
}
interface RunDebugProps{
    selectedMenuBar:string;
}
const RunDebug = ({selectedMenuBar}:RunDebugProps)=>{
    return(
        <Stack sx={styles.root} spacing={2} style={{display:selectedMenuBar==="Run and Debug"?"":"none"}}>
             <Stack sx={styles.firstContainer} direction={'row'}>
                <Typography sx={styles.text}>RUN AND DEBUG: RUN</Typography>
                <MoreHorizIcon sx={{color:"gray"}}  />
            </Stack>
            <Typography sx={styles.details}>
                <a style={{color:"#1976d2"}}>Open a file </a> which can be  debugged or run
            </Typography>
            <Button variant="contained" size="small" sx={styles.button}>Run and Debug</Button>
            <Typography sx={styles.details}>
                To customize Run and Debug,<a style={{color:"#1976d2"}}> open a folder </a> and create a launch.js file 
            </Typography>
        </Stack>
    )
}
export default RunDebug