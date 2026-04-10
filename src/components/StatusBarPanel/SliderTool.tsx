import { Slider, Stack } from "@mui/material"
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LightModeIcon from '@mui/icons-material/LightMode';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { muteAudio, unMuteAudio } from "../../features/StatusBarPanel/StatusBarPanelSlice";
const styles = {
    root: {
        display: "flex",
        alignItems: "center"
    }
}
interface SliderToolProps {
    title: string;
    value: number;
}
const SliderTool = ({ title, value }: SliderToolProps) => {
    const dispatch = useDispatch();
    const [sliderValue, setSliderValue] = useState<number>(value)
    const handleChange = (event: Event, newValue: number) => {
        setSliderValue(newValue);
        console.log(event);
    };
    useEffect(()=>{
         if(sliderValue===0){
            dispatch(muteAudio())
        }
        else{
            dispatch(unMuteAudio())
        }
    },[sliderValue])
    return (
        <Stack sx={styles.root} direction={'row'} spacing={2}>
            {
                title === "Volume" ? (sliderValue === 0 ? <VolumeOffIcon sx={{ color: "gray" }} /> : <VolumeUpIcon sx={{ color: "white" }} />) : (<LightModeIcon sx={{ color: "white" }} />)
            }
            <Slider
                size="medium"
                value={sliderValue} onChange={handleChange}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "#d34615",boxSizing:"border-box" }}
            />
        </Stack>
    )
}
export default SliderTool