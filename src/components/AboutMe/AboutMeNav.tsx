import { Box, Divider, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import github from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedIn.png'
import whatsappIcon from '../../assets/whatsapp.png'
import cplusplusIcon from '../../assets/Cplusplus.png'
import pythonIcon from '../../assets/pythoncli.png'
import golangIcon from '../../assets/golang.webp'
import typescriptIcon from '../../assets/typescript.png'
import reactIcon from '../../assets/react.svg'
import fastapiIcon from '../../assets/fastapi.png'
import sqlIcon from '../../assets/sql.png'
import pytorchIcon from '../../assets/pytorch.png'
import scikitLearnIcon from '../../assets/Scikit-learn.png'
import langchainIcon from '../../assets/langchain.webp'
import huggingFaceIcon from '../../assets/huggingface.webp'
import numpyIcon from '../../assets/numpy.png'
import pandasIcon from '../../assets/pandas.png'
const data = [
    {
        icon: github,
        title: "Github"
    },
    {
        icon: linkedinIcon,
        title: "Linkedin"
    },
    {
        icon: whatsappIcon,
        title: "Whatsapp"
    },
    {
        title: "Divider"
    },
    {
        icon: cplusplusIcon,
        title: "C / C++"
    },
    {
        icon: pythonIcon,
        title: "Python"
    },
    {
        icon: golangIcon,
        title: "Go Lang"
    },
    {
        icon: typescriptIcon,
        title: "Typescript"
    },
    {
        icon: sqlIcon,
        title: "SQL"
    },
    {
        title: "Divider"
    },
    {
        icon: fastapiIcon,
        title: "Fast API"
    },
    {
        icon: pytorchIcon,
        title: "PyTorch"
    },
    {
        icon: scikitLearnIcon,
        title: "Scikit-learn"
    },

    {
        icon: langchainIcon,
        title: "LangChain"
    },
    {
        icon: huggingFaceIcon,
        title: "Hugging Face"
    },
    {
        icon: numpyIcon,
        title: "NumPy"
    },
    {
        icon: pandasIcon,
        title: "Pandas"
    },
    {
        icon: reactIcon,
        title: "React JS"
    },
]
const AboutMeNav = () => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles = {
        root: {
            backgroundColor: "#303030",
            width: "13vw",
            height: isMaximized ? "66vh" : "93vh",
            overflow: "auto",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },
        title: {
            color: "white",
            fontSize: 16
        },
        icon: {
            width: 25,
            height: 25,
            objectFit: "contain"
        },
        skillsStack: {
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            paddingLeft: 3,
            paddingTop: 2,
            paddingBottom: 2
        },
        buttonSkills: {
            alignItems: "flex-start",
            backgroundColor: "transparent",
            border: "none",
            "&:hover": {
                backgroundColor: "#3e3e3e"
            }
        }
    }
    const handleLinks = (title: string) => {
        switch (title) {
            case "Github":
                window.open('https://github.com/Divyanshuddev', "_blank")
                return
            case "Linkedin":
                window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/', "_blank")
                return
            case "Whatsapp":
                window.open('https://api.whatsapp.com/send/?phone=%2B918303006600&text&type=phone_number&app_absent=0', "_blank")
                return
            default:
                return
        }
    }
    return (
        <Stack sx={styles.root}>
            {
                data.map((value, index) => {
                    return (
                        <Stack key={index} spacing={3} sx={styles.buttonSkills} component={'button'} onClick={() => handleLinks(value.title)}>
                            <Stack sx={styles.skillsStack} direction={'row'} style={{ display: value.title === "Divider" ? "none" : "" }} spacing={1.5}>
                                <Box component={'img'} src={value.icon} sx={styles.icon} />
                                <Typography sx={styles.title}>{value.title}</Typography>
                            </Stack>
                            <Divider style={{ display: value.title === "Divider" ? "" : "none", backgroundColor: "gray", width: "100%" }} />

                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
export default AboutMeNav