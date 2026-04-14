import { Stack } from "@mui/material"
import SideBar from "./VscodeUI/SideBar"
import Footer from "./VscodeUI/Footer"
import SideBarDisplay from "./VscodeUI/SideBarDisplay"
import WelcomeWindow from "./VscodeUI/WelcomeWindow"

const styles={
    root:{
        
    },
    main:{
        display:"flex",
    }
}
const VscodeSection = ()=>{
    return(
        <Stack sx={styles.root}>
            <Stack sx={styles.main} direction={'row'}>
            <SideBar />
            <SideBarDisplay />
            <WelcomeWindow />
            </Stack>
            <Footer />
        </Stack>
    )
}
export default VscodeSection