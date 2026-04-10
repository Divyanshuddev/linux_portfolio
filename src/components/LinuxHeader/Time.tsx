import { Typography } from "@mui/material"
const styles ={
    root:{
        color:"white",
        fontSize:14
    }
}
const Time = () => {
    const now = new Date();
    const formatted = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return (
        <Typography sx={styles.root}>{formatted}</Typography>
    )
}
export default Time