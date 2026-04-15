import { Stack } from "@mui/material"
import VLCFileBar from "./VLCFileBar"
import VideoSection from "./VideoSection"

const VLCPanel = ()=>{
    return(
        <Stack>
            <VLCFileBar />
            <VideoSection />
        </Stack>
    )
}
export default VLCPanel