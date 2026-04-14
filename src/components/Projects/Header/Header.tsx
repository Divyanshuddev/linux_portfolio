import { Stack } from "@mui/material"
import MenuBar from "./MenuBar";
import OpenCloseMinMax from "./OpenCloseMinMax";

const styles={
    root:{
        boxSizing:"border-box",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        height:"4vh",
        borderBottom:"0.1px solid #3d3c3c"
    }
}
interface HeaderProps {
  onToggleResize: () => void;
}
const Header = ({onToggleResize}:HeaderProps)=>{
    return(
        <Stack sx={styles.root} direction={'row'}>
            <MenuBar />
            <OpenCloseMinMax onToggleResize={onToggleResize} />
        </Stack>
    )
}
export default Header