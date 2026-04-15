import { Box, Stack } from "@mui/material"
import ubuntuLogo from '../../assets/ubuntu_logo.png'
import LoaderAnimation from "./LoaderAnimation"
import ubuntuTextLogo from '../../assets/ubuntu_text_logo.png'
const styles = {
    root: {
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    ubuntuLogo: {
        width: 250,
        height: 250
    },
    ubuntuTextLogo: {
        width: 300,
        height: 70
    },
    loadingContainer: {
        display: "flex",
        alignItems: "center"
    }
}
const Loader = () => {
    return (
        <Stack sx={styles.root} spacing={18}>
            <Box component={'img'} src={ubuntuLogo} sx={styles.ubuntuLogo} />
            <Stack sx={styles.loadingContainer} spacing={8}>
                <LoaderAnimation />
                <Box component={'img'} src={ubuntuTextLogo} sx={styles.ubuntuTextLogo} />
            </Stack>
        </Stack>
    )
}
export default Loader