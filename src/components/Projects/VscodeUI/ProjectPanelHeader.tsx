import { Box, Button, Chip, Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
interface ProjectPanelHeaderProps {
    projectIcon: string;
    title: string;
    techStack: string[];
    github: string;
    link: string;
}
const ProjectPanelHeader = ({ projectIcon, title, github, link, techStack }: ProjectPanelHeaderProps) => {
    const styles = {
        root: {
            boxSizing: "border-box",
            paddingTop: 4,
            paddingLeft: 15,
            display: "flex",
            alignItems: "flex-start"
        },
        projectIcon: {
            width: 120,
            height: 120,
        },
        projectTitle: {
            color: "whitesmoke",
            fontSize: 25,
            fontWeight: "bold"
        },
        category: {
            color: "white"
        },
        button: {
            textTransform: "capitalize",
            color: "white",
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
    }
    const handleLinks = (link: string) => {
        window.open(link, '_blank')
    }
    return (
        <Stack sx={styles.root} direction={'row'} spacing={4}>
            <Box component={'img'} src={projectIcon} sx={styles.projectIcon} />
            <Stack spacing={0.5}>
                <Typography sx={styles.projectTitle}>{title}</Typography>
                <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                    <Button variant="text" startIcon={<OpenInNewIcon />} disableElevation disableFocusRipple disableRipple disableTouchRipple sx={styles.button} onClick={() => handleLinks(link)}>Live Demo</Button>
                    <Typography sx={{ color: "gray", fontSize: 30 }}>|</Typography>
                    <Button variant="text" startIcon={<GitHubIcon />} disableElevation disableFocusRipple disableRipple disableTouchRipple sx={styles.button} onClick={() => handleLinks(github)}> Github</Button>
                </Stack>
                <Stack sx={{ display: "flex", alignItems: "center", width: 600, flexWrap: "wrap", gap: 1 }} direction={'row'} >
                    {
                        techStack.map((value, index) => {
                            return (
                                <Chip key={index} label={value} variant="outlined" color="info" size="medium" />
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}
export default ProjectPanelHeader