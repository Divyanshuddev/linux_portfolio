import { Stack } from "@mui/material"
const styles = {
    root: {
        width: 70,
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: 1,
        borderRadius: 5,
        "&:hover": {
            backgroundColor: "#4d4d4d",
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    firstDesktop: {
        width: 30,
        height: 5,
        backgroundColor: "white",
        borderRadius: 5
    },
    secondDesktop: {
        width: 9,
        height: 9,
        borderRadius: "50%",
        backgroundColor: "#d9d9d9"
    }
}
const Activity = () => {
    return (
        <Stack sx={styles.root} direction={'row'} spacing={1}>
            <Stack sx={styles.firstDesktop}>
            </Stack>
            <Stack sx={styles.secondDesktop}></Stack>
        </Stack>
    )
}
export default Activity