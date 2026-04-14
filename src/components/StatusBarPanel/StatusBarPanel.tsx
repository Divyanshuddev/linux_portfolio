import { Stack } from "@mui/material"
import BatteryIndicator from "./BatteryIndicator"
import PowerButton from "./PowerButton"
import SliderTool from "./SliderTool"
import PanelTools from "./PanelTools"
const styles = {
    root: {
        position: "absolute",
        top: 4,
        right: 10,
        width: 400,
        boxSizing: "border-box",
        padding: 2,
        backgroundColor: "#1B211A",
        borderRadius: 4.5,
        zIndex:100
    },
    uppertoolsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}
const StatusBarPanel = () => {
    return (
        <Stack sx={styles.root} spacing={2}>
            <Stack sx={styles.uppertoolsContainer} direction={'row'}>
                <BatteryIndicator />
                <PowerButton />
            </Stack>
            <SliderTool title="Volume" value={40} />
            <SliderTool title="Brightness" value={80} />
            <PanelTools />
        </Stack>
    )
}
export default StatusBarPanel