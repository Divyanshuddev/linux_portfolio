import { Box, Button, Input, Stack, Typography } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RefreshIcon from '@mui/icons-material/Refresh';
import ecommerceImage1 from '../../../assets/Projects/Ecommerce1.png'
import ecommerceImage2 from '../../../assets/Projects/Ecommerce2.png'
import ecommerceImage3 from '../../../assets/Projects/Ecommerce3.png'
import ecommerceImage4 from '../../../assets/Projects/Ecommerce4.png'
import airbnbImage1 from '../../../assets/Projects/Airbnb1.png'
import airbnbImage2 from '../../../assets/Projects/Airbnb2.png'
import airbnbImage3 from '../../../assets/Projects/Airbnb3.png'
import airbnbImage4 from '../../../assets/Projects/Airbnb4.png'
import miroImage1 from '../../../assets/Projects/miro1.png'
import miroImage2 from '../../../assets/Projects/miro2.png'
import miroImage3 from '../../../assets/Projects/miro3.png'
import miroImage4 from '../../../assets/Projects/miro4.png'
import postPilot1 from '../../../assets/Projects/PostPilot1.png'
import postPilot2 from '../../../assets/Projects/PostPilot2.png'
import postPilot3 from '../../../assets/Projects/PostPilot3.png'
import postPilot4 from '../../../assets/Projects/PostPilot4.png'
import hangmanImage1 from '../../../assets/Projects/Hangman1.png'
import hangmanImage2 from '../../../assets/Projects/Hangman2.png'
import hangmanImage3 from '../../../assets/Projects/Hangman3.png'
import projectIcon1 from '../../../assets/Projects/projectIcon1.png'
import projectIcon2 from '../../../assets/Projects/projectIcon2.png'
import projectIcon3 from '../../../assets/Projects/projectIcon3.png'
import projectIcon4 from '../../../assets/Projects/projectIcon4.png'
import projectIcon5 from '../../../assets/Projects/projectIcon5.png'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
const projectList = [
    {
        projectId: 1,
        title: "ShopSwift",
        projectIcon: projectIcon1,
        images: [
            ecommerceImage1,
            ecommerceImage2,
            ecommerceImage3,
            ecommerceImage4
        ],
        category: "Web Apps",
        details: "Built a responsive and scalable e-commerce platform with product listing, filtering, cart, and checkout using React.js and Redux Toolkit. Developed secure backend APIs in Django REST Framework to manage users, products, and orders, including authentication and CRUD operations.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Redux Toolkit",
            "Responsive UI",
            "Material UI",
            "Python",
            "Django",
            "REST Framework"
        ],
        github: "https://github.com/Divyanshuddev/e-commerce-app",
        link: "https://e-commerce-app-beta-nine.vercel.app/",
        downloads: "4.2M",
        rating: "4.6"
    },
    {
        projectId: 2,
        title: "Airbnb Frontend Clone",
        projectIcon: projectIcon2,
        images: [
            airbnbImage1,
            airbnbImage2,
            airbnbImage3,
            airbnbImage4
        ],
        category: "Web Apps",
        details: "Designed and implemented a pixel-perfect, responsive UI using React.js and Material-UI, replicating Airbnb’s layout and styling with TypeScript for type safety. Built dynamic pages and navigation using React Router, ensuring seamless client-side routing and enhanced user experience. Applied component reusability, responsive design principles, and clean architecture to improve scalability and maintainability across devices.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
        ],
        github: "https://github.com/Divyanshuddev/airbnb-frontend-clone",
        link: "https://airbnb-frontend-clone-3fw1.vercel.app/",
        downloads: "3.9M",
        rating: "4.2"
    },
    {
        projectId: 3,
        title: "Miro",
        projectIcon: projectIcon3,
        images: [
            miroImage1,
            miroImage2,
            miroImage3,
            miroImage4
        ],
        category: "Web Apps",
        details: "Integrated Framer Motion to implement scroll-based animations and micro-interactions, enhancing user engagement and UX flow. Followed a modular component architecture, enabling code reusability, easy maintenance, and consistent styling across the UI.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Framer Motion Animation"
        ],
        github: "https://github.com/Divyanshuddev/miro-app",
        link: "https://miro-app-coral.vercel.app/",
        downloads: "4.1M",
        rating: "4"
    },
    {
        projectId: 4,
        title: "Post Pilot",
        projectIcon: projectIcon4,
        images: [
            postPilot1,
            postPilot2,
            postPilot3,
            postPilot4
        ],
        category: "Web Apps",
        details: "Implemented Material-UI theming and components for a sleek, accessible, and customizable user interface across all device sizes. Built a modular and scalable codebase using functional components and hooks, following best practices in component-driven architecture.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
        ],
        github: "https://github.com/Divyanshuddev/post_pilot_app",
        link: "https://post-pilot-app.vercel.app/",
        downloads: "4.3M",
        rating: "4.7"
    },
    {
        projectId: 5,
        title: "Hangman Game App",
        projectIcon: projectIcon5,
        images: [
            hangmanImage1,
            hangmanImage2,
            hangmanImage3
        ],
        category: "Web Apps",
        details: "A fun and interactive Hangman Game app built with React.js, featuring multiple word categories, real-time guessing, and smooth animations. Designed with a modern, mobile-responsive UI and deployed on Vercel for seamless access across devices.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Responsive UI",
        ],
        github: "https://github.com/Divyanshuddev/hangman-game-app",
        link: "https://hangman-game-app-lac.vercel.app/",
        downloads: "4.4M",
        rating: "4.7"
    },

]
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
    details: {
        color: "whitesmoke",
        fontSize: 12
    },
    button: {
        textTransform: "capitalize",
        borderRadius: 0,
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
    projectSection: {
        backgroundColor: "transparent",
        border: "none",
        boxSizing: "border-box",
        display: "flex",
        // alingItems: "center",
        padding: 2,
        "&:hover": {
            backgroundColor: "#2a2d2e"
        }
    },
    projectIcon: {
        width: 70,
        heigth: 70,
        boxShadow: "1px 1px 40px black",
        // objectFit: "contain"
    },
    projectTitle: {
        color: "White",
        fontWeight: "bold",
        fontSize: 12,
        alignSelf: "flex-start"
    },
    icons: {
        width: 12,
        height: 12,
    },
    iconText: {
        fontSize: 12,
        color: "gray"
    },
    ratingStack: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    projectDetails: {
        color: "#969da1",
        fontSize: 11,
        textAlign: "start",
        alignSelf: "flex-start"
    },
    installButton: {
        textTransform: "capitalize",
        width: 10,
        height: 18,
        fontSize: 10,
        borderRadius: 1,
        paddingLeft: 0,
        paddingRight: 0,
        padding: 0,
        alignSelf: "flex-end"
    }
    // titleStack:{
    //     display:"flex",
    //     alignItems:"center",
    //     justifyContent:"space-between",
    //     width:"100%"
    // }
}
interface ExtensionsProps {
    selectedMenuBar: string;
}
const Extensions = ({ selectedMenuBar }: ExtensionsProps) => {
    return (
        <Stack sx={styles.root} spacing={2} style={{ display: selectedMenuBar === "Extensions" ? "" : "none" }}>
            <Stack sx={styles.firstContainer} direction={'row'}>
                <Typography sx={styles.text}>EXPLORER</Typography>
                <Stack direction={'row'} spacing={0.5}>
                    <RefreshIcon sx={{ color: "gray" }} fontSize="small" />
                    <MoreHorizIcon sx={{ color: "gray" }} fontSize="small" />
                </Stack>
            </Stack>
            <Input sx={styles.input} disableUnderline placeholder="Search Projects" size="small" />
            <Stack spacing={0}>
                {
                    projectList.map((value, index) => {
                        return (
                            <Stack sx={styles.projectSection} component={'button'} key={index} direction={'row'} spacing={1}>
                                <Box component={'img'} src={value.projectIcon} sx={styles.projectIcon} />
                                <Stack >
                                    <Typography sx={styles.projectTitle} >{value.title}</Typography>
                                    <Typography sx={styles.projectDetails}>{value.details.slice(0, 50)}...</Typography>
                                    <Stack direction={'row'} sx={styles.ratingStack} spacing={1}>
                                        <Stack direction={'row'} sx={styles.ratingStack} spacing={0.5}>
                                            <CloudDownloadOutlinedIcon sx={styles.icons} style={{ color: "#63ace3" }} />
                                            <Typography sx={styles.iconText}>{value.downloads}</Typography>
                                        </Stack>
                                        <Stack direction={'row'} sx={styles.ratingStack} spacing={0.5}>
                                            <StarOutlinedIcon sx={styles.icons} style={{ color: "#fd8d00" }} />
                                            <Typography sx={styles.iconText}>{value.rating}</Typography>
                                        </Stack>
                                        <Button variant="contained" sx={styles.installButton} style={{ alignSelf: "center" }} >Install</Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}
export default Extensions