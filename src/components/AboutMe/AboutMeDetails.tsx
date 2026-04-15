import { Avatar, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import divyanshuPhoto from '../../assets/DivyanshuPhoto.png'
const AboutMeDetails=()=>{
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles={
        root:{
            width:isMaximized?"37vw":"83vw",
            height:isMaximized?"66vh":"93vh",
            backgroundColor:"#3d3d3d",
            display:"flex",
            alignItems:"center",
            boxSizing:"border-box",
            paddingTop:isMaximized?5:10
        },
        avatar:{
            width:isMaximized?120:200,
            height:isMaximized?120:200,
            objectFit:"contain"
        },
        box:{
            width:isMaximized?500:800
        },
        detailsBox:{
            padding:2,
            borderRadius:2,
            backgroundColor:"#2c2c2c",
            boxShadow:"1px 1px 2px black"
        }
    }
    return(
        <Stack sx={styles.root}>
            <Stack sx={{alignItems:"center"}} spacing={3}>
                <Avatar sx={styles.avatar} src={divyanshuPhoto} />
                <Stack sx={styles.box} spacing={2}> 
                    <Stack sx={styles.detailsBox}>
                        <Typography sx={{color:"gray",fontSize:14}}>Name</Typography>
                        <Typography sx={{color:"white",fontSize:18}}>Divyanshu Sharma</Typography>
                    </Stack>
                    <Stack sx={styles.detailsBox}>
                      <Typography sx={{color:"gray",fontSize:14}}>Profession</Typography>
                      <Typography sx={{color:"white",fontSize:18}}>Software Developer</Typography>
                    </Stack>
                    <Stack sx={styles.detailsBox}>
                        <Typography sx={{color:"gray",fontSize:14}}>About</Typography>
                        <Typography sx={{color:"white",fontSize:16}}>I’m a programmer focused on building intelligent systems using AI, machine learning, and modern backend technologies. I design and develop scalable applications that combine clean code with real-world problem solving. Driven by curiosity, I continuously learn and apply new technologies to create impactful digital solutions.</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default AboutMeDetails