import React, { useState } from "react";
import { Box, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, Typography, Zoom, styled, useTheme, FormLabel } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import FallingLetters from "../../../../components/AnimatedBackground/FallingLetters";
import useMediaQuery from '@mui/material/useMediaQuery';


const Hero = () => {
    const [open, setOpen] = useState(false); // Estado para controlar a modal
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm")); // Responsividade

    // Função para abrir a modal
    const handleOpen = () => {
        setOpen(true);
    };

    // Função para fechar a modal
    const handleClose = () => {
        setOpen(false);
    };
   
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
                <Grid container spacing={2} direction={{ sm: "row", md: "row", xs: "column" }} alignItems="center">
                    {/* Imagem */}
                    <Grid item xs={12} md={5} sm={6}>
                        <Box display="flex" justifyContent="center">
                            <StyledImg src={Avatar} />
                        </Box>
                    </Grid>

                    {/* Textos e Botões */}
                    <Grid item xs={12} md={7} sm={6} zIndex={1}>
                        <Zoom in={true}>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                                Giovana Kassime
                            </Typography>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                            <Typography color="primary.contrastText" variant="h4" textAlign="center">
                                Estudante Técnica ADS
                            </Typography>
                        </Zoom>

                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Slide direction="up" in={true}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={handleOpen}>
                                        <MailOutlineIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Slide>

                            <Slide direction="up" in={true}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <a
                                            href="/public/cv.pdf"
                                            target="_blank"
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                                display: "flex"
                                            }}
                                        >
                                            <DownloadIcon />
                                            <Typography>Download CV</Typography>
                                        </a>
                                    </StyledButton>
                                </Grid>
                            </Slide>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* Modal de contato */}
            <Dialog
           PaperProps={{
            style: {
                backgroundColor: "rgba(64, 4, 56, 0.33)", // Fundo semi-transparente para o Dialog
                backdropFilter: "blur(10px)", // Efeito de desfoque (opcional)
            },
        }}
                open={open}
                onClose={handleClose}
                fullScreen={fullScreen}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>Contact Me</DialogTitle>
                <DialogContent style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
                    <Typography>
                            Formulário para meu Email 
                    </Typography>
                    <FormLabel>
                        <input type="text" placeholder="Seu nome" variant="outlined" required />
                        <input type="email" placeholder="Seu email" required />
                        <textarea placeholder="Sua mensagem" required></textarea>
                    </FormLabel>
                </DialogContent>

                <DialogActions style={{backgroundColor:"rgba(0, 102, 255, 0.12)"}}>
                    <StyledButton onClick={handleClose}>Fechar</StyledButton>
                    <StyledButton onClick={handleClose} >
                        Enviar
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </StyledHero>
    );
};

export default Hero;