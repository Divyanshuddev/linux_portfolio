import { Stack } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from "react-redux";
import { statusBarPanelTools } from "../../features/StatusBarPanel/StatusBarPanelSlice";
const data = [
    {
        title: "Github",
        icon: <GitHubIcon sx={{ color: "white" }} fontSize="medium" />
    },
    {
        title: "LinkedIn",
        icon: <LinkedInIcon sx={{ color: "white" }} fontSize="medium" />
    },
    {
        title: "Whatsapp",
        icon: <WhatsAppIcon sx={{ color: "white" }} fontSize="medium" />
    },
    {
        title: "Power",
        icon: <PowerSettingsNewIcon sx={{ color: "white" }} fontSize="medium" />
    },
]
const styles = {
    root: {
        display: "flex",
        alignItems: "center",
    },
    button: {
        width: 45,
        height: 45,
        borderRadius: "50%",
        boxSizing: "border-box",
        padding: 1,
        backgroundColor: "#303030",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        "&:hover": {
            backgroundColor: "#d34615",
            cursor: "pointer"
        }
    }
}
const PowerButton = () => {
    const dispatch = useDispatch()
    return (
        <Stack sx={styles.root} spacing={1} direction={'row'}>
            {
                data.map((value, index) => {
                    return (
                        <Stack key={index} sx={styles.button} component={'button'} onClick={() => dispatch(statusBarPanelTools(value.title))}>
                            {value.icon}
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
export default PowerButton