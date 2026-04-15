import {  Popover, Stack, Typography } from "@mui/material"
import { useState } from "react";
import PopoverList from "./PopoverList";
  const menuBar= [
     {
      "label": "Media",
      "items": [
        "Open File...",
        "Open Multiple Files...",
        "Open Folder...",
        "Open Disc...",
        "Open Network Stream...",
        "Save Playlist to File...",
        "Convert / Save...",
        "Stream...",
        "Quit"
      ]
    },
    {
      "label": "Playback",
      "items": [
        "Play",
        "Pause",
        "Stop",
        "Next",
        "Previous",
        "Faster",
        "Slower",
        "Normal Speed",
        "Jump Forward",
        "Jump Backward"
      ]
    },
    {
      "label": "Audio",
      "items": [
        "Audio Track",
        "Audio Device",
        "Stereo",
        "Mono",
        "Left",
        "Right",
        "Increase Volume",
        "Decrease Volume",
        "Mute"
      ]
    },
    {
      "label": "Video",
      "items": [
        "Fullscreen",
        "Always on Top",
        "Zoom",
        "Aspect Ratio",
        "Crop",
        "Take Snapshot"
      ]
    },
    {
      "label": "Subtitle",
      "items": [
        "Add Subtitle File...",
        "Sub Track",
        "Subtitle Delay Up",
        "Subtitle Delay Down"
      ]
    },
    {
      "label": "Tools",
      "items": [
        "Effects and Filters",
        "Track Synchronization",
        "Media Information",
        "Codec Information",
        "Preferences"
      ]
    },
    {
      "label": "View",
      "items": [
        "Playlist",
        "Minimal Interface",
        "Status Bar",
        "Docked Playlist"
      ]
    },
    {
      "label": "Help",
      "items": [
        "Help",
        "Check for Updates",
        "About VLC"
      ]
    }
  ]
const styles = {
    root: {
        display: "flex",
        alignItems: "center",
        backgroundColor:"#efefef",
        height:"3vh",

    },
    menuBarButton: {
        backgroundColor: "transparent",
        border: "none",
        borderRadius: 1,
    },
    text: {
        color: "black",
        fontSize: 12
    }
}
const VLCFileBar=()=>{
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
        const [list, setList] = useState<string[]>([])
        const handleClick = (event: React.MouseEvent<HTMLElement>, list: string[]) => {
            setAnchorEl(prev => (prev ? null : event.currentTarget))
            setList(list)
        }
    
        const handleClose = () => {
            setAnchorEl(null)
        }
        const open = Boolean(anchorEl)
    return(
         <Stack direction={'row'} spacing={1} sx={styles.root}>
            {/* <Box component={'img'} src={vsCodeLogo} sx={styles.vsCodeLogo} /> */}
            {
                menuBar.map((value, index) => {
                    return (
                        <Stack component={'button'} key={index} sx={styles.menuBarButton} aria-haspopup="true"
                            onClick={(e) => handleClick(e, value.items)}>
                            <Typography sx={styles.text}>{value.label}</Typography>

                        </Stack>
                    )
                })
            }
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                elevation={1}
                disableRestoreFocus
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 0
                        }
                    }
                }}

            >
                <PopoverList list={list} />
            </Popover>
        </Stack>
    )
}
export default VLCFileBar