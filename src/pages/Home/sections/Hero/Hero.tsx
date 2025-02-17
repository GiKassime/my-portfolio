import { Box, Container, Grid, Slide, Typography, Zoom, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";

import FallingLetters from "../../../../components/AnimatedBackground/FallingLetters";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Para evitar barras de rolagem
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "10%",
        },
        [theme.breakpoints.up('sm')]: { // <= mobile
            paddingTop: "10%",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "10vh",
        },
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        zIndex: 1,
        [theme.breakpoints.up('xs')]: { // <= mobile (0px ou maior)
            width: "50%",
        },
        [theme.breakpoints.up('sm')]: { // <= tablet (600px ou maior)
            width: "70%",
        },
        [theme.breakpoints.up('md')]: { // <= desktop (900px ou maior)
            width: "70%",
        },
    }));

    return (
        <StyledHero>
            {/* Fundo animado com FallingLetters */}
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                zIndex={0} // Garante que fique atrás dos outros elementos
            >
                <FallingLetters />
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={2} direction={{ sm: "row", md: "row", xs: "column" }} alignItems="center" >
                    {/* Imagem */}
                    <Grid item xs={12} md={5} sm={6}>
                        <Box display="flex" justifyContent="center">
                            <StyledImg src={Avatar} />
                        </Box>
                    </Grid>

                    {/* Textos e Botões */}
                    <Grid item xs={12} md={7} sm={6} zIndex={1}>
                        <Zoom in={true}><Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                            Giovana Kassime
                        </Typography></Zoom>
                        <Zoom in={true} style={{ transitionDelay: '500ms' }} >
                            <Typography color="primary.contrastText" variant="h4" textAlign="center">
                                Estudante Técnica ADS
                            </Typography></Zoom>

                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Slide direction="up" in={true}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                                </Slide>

                                <Slide direction="up" in={true} >

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                </Slide>


                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;