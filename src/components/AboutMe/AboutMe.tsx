import { Stack } from "@mui/material"
import AboutMeNav from "./AboutMeNav"
import AboutMeDetails from "./AboutMeDetails"
const AboutMe = () => {
    const styles = {
        root: {
            display: "flex",
            alignItems: "flex-start"
        }
    }
    return (
        <Stack sx={styles.root} direction={'row'}>
            <AboutMeNav />
            <AboutMeDetails />
        </Stack>
    )
}
export default AboutMe