import React from "react";
import { Box, Container, Typography, Button, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Importe o módulo Navigation
import "swiper/css"; // Importe o CSS do Swiper
import "swiper/css/navigation"; // Importe o CSS do Navigation
import { Margin } from "@mui/icons-material";

const projects = [
    {
        name: "Meu Portfólio",
        image: "https://img.freepik.com/psd-gratuitas/feliz-dia-dos-namorados-venda-de-desconto-instagram-ou-modelo-de-postagem-de-midia-social_106176-1730.jpg?t=st=1739746894~exp=1739750494~hmac=6742e6b074701b72a4e9bc91bde1c9cfd323bf04d45284c4c9a7e54993c69ab2&w=740",
        deployLink: "https://meu-portfolio.vercel.app/",
    },
    {
        name: "Calculadora React",
        image: "https://via.placeholder.com/800x400",
        deployLink: "https://calculadora-react.vercel.app/",
    },
    {
        name: "To-Do List",
        image: "https://via.placeholder.com/800x400",
        deployLink: "https://todo-list.vercel.app/",
    },
    {
        name: "Projeto 4",
        image: "https://via.placeholder.com/800x400",
        deployLink: "#",
    },
    {
        name: "Projeto 5",
        image: "https://via.placeholder.com/800x400",
        deployLink: "#",
    },
    {
        name: "Projeto 6",
        image: "https://via.placeholder.com/800x400",
        deployLink: "#",
    },
    {
        name: "Projeto 7",
        image: "https://via.placeholder.com/800x400",
        deployLink: "#",
    },
    {
        name: "Projeto 8",
        image: "https://via.placeholder.com/800x400",
        deployLink: "#",
    },
    {
        name: "Projeto 9",
        image: "https://via.placeholder.com/800x400",
        deployLink: "#",
    },
];

const StyledProjects = styled("div")(({ }) => ({
    background: "linear-gradient(357deg, rgba(100,13,95,1) 0%, rgba(24,24,24,1) 95%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 0",
}));

const Projects = () => {
    return (
        <StyledProjects>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    color="primary.contrastText"
                    textAlign="center"
                    mb={4}
                    sx={{ mt: { xs: 10, sm: 30, md: 2 } }}
                >
                    Meus Projetos
                </Typography>

                {/* Carousel com Swiper */}
                <Box sx={{ width: { xs: "70vw", sm: "80vw", md: "70vw", lg: "60vw" }, margin: "5% auto 0 auto", position: "relative" }}>
                    <Swiper
                        spaceBetween={20} // Espaço entre os slides
                        slidesPerView={1} // Número de slides visíveis por vez
                        slidesPerGroup={1} // Avança de 3 em 3 slides
                        breakpoints={{
                            600: { slidesPerView: 2, slidesPerGroup: 2 }, // 2 slides em telas >= 600px
                            900: { slidesPerView: 3, slidesPerGroup: 3 }, // 3 slides em telas >= 900px
                        }}
                        navigation // Habilita os botões de navegação
                        modules={[Navigation]} // Adiciona o módulo Navigation
                        loop // Habilita o loop infinito
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index} >
                                <Box sx={{
                                    textAlign: "center", p: 2, background: " rgba(241, 240, 240, 0.45)", borderRadius: "20px"
                                }}  >
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        style={{ width: "100%", borderRadius: "10px" }}
                                    />
                                    <Typography variant="h5" sx={{ color: "white", mt: 2 }}>
                                        {project.name}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={project.deployLink}
                                        sx={{ mt: 2 }}
                                    >
                                        Ver Projeto
                                    </Button>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
            {/* Estilos personalizados para os botões de navegação */}
            <style>
                {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white; /* Cor dos ícones */
            background-color: rgba(0, 0, 0, 0.5); /* Fundo dos botões */
            border-radius: 50%; /* Botões redondos */
            width: 40px; /* Largura */
            height: 40px; /* Altura */
            transition: background-color 0.3s ease; /* Transição suave */
          }
         .swiper-button-next {
            margin: 0 0 100px 0;
         }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background-color: rgba(177, 0, 186, 0.7); /* Fundo ao passar o mouse */
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px; /* Tamanho do ícone */
          }
        `}
            </style>
        </StyledProjects>
    );
};

export default Projects;