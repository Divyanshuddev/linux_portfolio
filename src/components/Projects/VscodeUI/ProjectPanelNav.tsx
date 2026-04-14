import { Box, IconButton, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/Store";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
interface ProjectPanelNavProps {
    title: string;
    icon: string;
}
const ProjectPanelNav = ({ title, icon }: ProjectPanelNavProps) => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles = {
        navBar: {
            width: isMaximized ? "50vw" : "76vw",
            heigth: "5vh",
            backgroundColor: "#181818",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        welcomeFile: {
            width: "fit-content",
            height: "5vh",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#1f1f1f",
            borderTop: "2px solid #1976d2",
            paddingLeft: 1
        },
        icon: {
            width: 30,
            height: 30
        },
        welcomeText: {
            color: "white"
        },
    }
    return (
        <Stack sx={styles.navBar} direction={'row'}>
            <Stack sx={styles.welcomeFile} direction={'row'}>
                <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                    <Box component={'img'} src={icon} sx={styles.icon} />
                    <Typography sx={styles.welcomeText}><i>{title}</i></Typography>
                </Stack>
                <IconButton>
                    <CloseSharpIcon fontSize="small" sx={{ color: "gray" }} />
                </IconButton>
            </Stack>
            <Stack sx={{ display: "flex", alignItems: "center", boxSizing: "border-box", paddingRight: 1 }} direction={'row'} spacing={1}>
                <SpaceDashboardOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
                <MoreHorizOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
            </Stack>
        </Stack>
    )
}
export default ProjectPanelNav