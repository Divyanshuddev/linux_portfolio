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
interface ExplorerProps{
    selectedMenuBar:string;
}
const Explorer =({selectedMenuBar}:ExplorerProps)=>{
    return(
        <Stack sx={styles.root} spacing={2} style={{display:selectedMenuBar==="Explorer"?"":"none"}}>
            <Stack sx={styles.firstContainer} direction={'row'}>
                <Typography sx={styles.text}>EXPLORER</Typography>
                <MoreHorizIcon sx={{color:"gray"}} fontSize="small" />
            </Stack>
            <Typography sx={styles.details}>You have not yet opened a folder</Typography>
            <Button variant="contained" size="small" sx={styles.button}>Open Folder</Button>
            <Typography sx={styles.details} >Opening a folder will close all currently open editors. to keep them open, <a style={{color:"#1976d2"}}>add a folder </a>instead.</Typography>
            <Typography sx={styles.details}>You can clone a repositry locally</Typography>
            <Button variant="contained" size="small" sx={styles.button}>Clone Repository</Button>
            <Typography sx={styles.details}>To learn more about how to use Git and source control in VSCode <a style={{color:"#1976d2"}}>read out docs</a></Typography>
        </Stack>
    )
}
export default Explorer