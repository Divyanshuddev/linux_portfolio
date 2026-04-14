import { Button, Stack, Typography } from "@mui/material"
const styles = {
    root: {
        boxSizing: "border-box",
        padding: 2,
    },
    text: {
        color: "gray",
        fontSize: 11
    },
    details: {
        color: "whitesmoke",
        fontSize: 12
    },
    button: {
        textTransform: "capitalize",
        borderRadius: 0,
    }
}
interface SourceControlProps {
    selectedMenuBar: string;
}
const SourceControl = ({ selectedMenuBar }: SourceControlProps) => {
    return (
        <Stack sx={styles.root} spacing={2} style={{ display: selectedMenuBar === "Source Control" ? "" : "none" }}>
            <Typography sx={styles.text}>SOURCE CONTROL</Typography>
            <Typography sx={styles.details}>In order to use git features, you  can open a folder containing a Git repository or clone  from  a URL</Typography>
            <Button variant="contained" size="small" sx={styles.button}>Open Folder</Button>
            <Button variant="contained" size="small" sx={styles.button}>Clone Repository</Button>
            <Typography sx={styles.details}>To learn more abhou how to use Git andf source control in VSCode <a style={{ color: "#1976d2" }}>read out docs</a> </Typography>

        </Stack>
    )
}
export default SourceControl