import { Input, Stack, Typography } from "@mui/material"
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

const styles = {
    root: {
        boxSizing: "border-box",
        padding: 2,
    },
    firstContainer: {
        displat: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: "gray",
        fontSize: 11
    },
    iconStack: {
        display: "flex",
        alignItems: "center"
    },
    iconsStyles: {
        width: 15,
        heigth: 15,
        color: "gray"
    },
    input: {
        backgroundColor: "#313131",
        fontSize: 12,
        color: "whitesmoke",
        padding: 0.6,
        paddingBottom: 0,
        "&.MuiInput-root": {
            "&.Mui-focused": {
                borderColor: "#1976d2",
                boxShadow: "0 0 0 1px #1976d2",
            },
        },
        display: "flex",
        alignItems: "center",


    },
    details:{
        color:"whitesmoke",
        fontSize:12
    },
}
interface SearchProps {
    selectedMenuBar: string;
}
const Search = ({ selectedMenuBar }: SearchProps) => {
    return (
        <Stack sx={styles.root} spacing={2} style={{ display: selectedMenuBar === "Search" ? "" : "none" }}>
            <Stack sx={styles.firstContainer} direction={'row'}>
                <Typography sx={styles.text}>SEARCH</Typography>
                <Stack direction={'row'} sx={styles.iconStack} spacing={0.5}>
                    <RefreshIcon sx={styles.iconsStyles} />
                    <ClearAllIcon sx={styles.iconsStyles} />
                    <NoteAddIcon sx={styles.iconsStyles} />
                    <FilterNoneIcon sx={styles.iconsStyles} />
                </Stack>
            </Stack>
            <Input sx={styles.input} disableUnderline placeholder="Search" size="small" />
            <Input sx={styles.input} disableUnderline placeholder="Replace" size="small" />
            <Typography sx={styles.details}>You have not opened or specified a folder. Only open files are currently searched - <a style={{color:"#1976d2"}}>Open Folder</a></Typography>
        </Stack>
    )
}
export default Search