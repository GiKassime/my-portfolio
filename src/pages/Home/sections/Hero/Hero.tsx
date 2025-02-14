import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "30vh"
        },
        [theme.breakpoints.up('sm')]: { // <= mobile
            paddingTop: "60vh"

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "20vh",
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        zIndex: 1,
        [theme.breakpoints.up('sm')]: { // <= mobile
           width: "50%",
            
        },
        [theme.breakpoints.up('md')]: { // <= mobile
            width: "80%",
             
         },
    }))

    return (
        <>
            <StyledHero>
            <Box
                position="absolute"
                top="0"
                left="0"
                margin={0}
                padding={0}
                width="100%"
                height="100%"
                sx={{
                    zIndex: 0, // Mantém a animação atrás
                    pointerEvents: "none", 
                    width: { xs: "100%", md: "120%" }
                }}
            >
                <DotLottieReact
                    src="https://lottie.host/54dc271a-bb21-4ee8-a02d-b2e81f40ff14/X1NF0yhABC.lottie"
                    loop
                    autoplay
                    style={{
                        width: "100vw",
                        height: "110vh",
                        objectFit: "cover"
                    }}
                />
            </Box>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                        <Box position="relative" display="flex" justifyContent="center">
                            {/* Animação atrás da foto */}
                            <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                sx={{
                                    transform: "translate(-50%, -50%)",
                                    width: { xs: "100%", md: "120%" }, // 100% no mobile, 120% em telas grandes
                                    zIndex: 0, // Mantém a animação atrás
                                }}
                            >
                                <AnimatedBackground />
                            </Box>

                            {/* Foto */}
                            <StyledImg src={Avatar} />
                        </Box>
   

                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Giovana Kassime</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" >Estudante Técnica ADS</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero