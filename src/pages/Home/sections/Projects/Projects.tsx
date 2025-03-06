import React, { useState, useRef } from "react";
import { Box, Container, Typography, Button, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const projects = [
    {
        name: "Meu Portfólio",
        image: "/src/assets/gifs/portfolio.gif",
        description: "Meu portfólio pessoal, onde você pode encontrar todos os meus projetos e detalhes sobre meu trabalho.",
        deployLink: "https://meu-portfolio.vercel.app/",
    },
    {
        name: "Ritmos do Sul",
        image: "/src/assets/gifs/ritmosDoSul.gif",
        description: "Esse site foi criado com o intuito de apresentar um cantor sertanejo fictício, incluindo sua história, agenda, discografia, fotos e uma música original. Utilizamos ferramentas de IA para gerar imagens, biografia e composição musical, proporcionando uma experiência interativa e imersiva.",
        deployLink: "https://ritmos-do-sul.vercel.app/index.html",
    },
    {
        name: "Diva do Picote",
        image: "/src/assets/gifs/DivaDoPicote.gif",
        deployLink: "https://site-first-mobile-a-diva-do-picote.vercel.app/index.html",
        description: "Este site foi criado com o intuito de apresentar a nova versão responsiva do salão de beleza A Diva do Picote. O projeto inclui uma splash screen, página de login, serviços disponíveis, agendamentos, galeria de trabalhos, equipe de profissionais e histórico de atendimentos. O acesso às páginas é feito por um menu hambúrguer, garantindo uma experiência otimizada para dispositivos móveis.",
    },
    {
        name: "Interface Administrativa",
        image: "/src/assets/gifs/telaAdministrativa.gif",
        deployLink: "https://tela-administrativa.vercel.app/relatorios.html",
        description: "O projeto foi desenvolvido para uma confeitaria, utilizando o Bootstrap na criação de uma interface administrativa. A primeira parte do projeto contém tudo no arquivo `index`, enquanto a segunda separa os estilos e scripts em arquivos externos para reaproveitamento. A navegação e o menu lateral são reutilizados através de um script em `app.js`, facilitando a manutenção e evitando a repetição de código.",
    },
    {
        name: "Currículo Jhonny Five",
        image: "/src/assets/gifs/JohnnyFive.gif",
        deployLink: "https://curriculo-jhonny-7diz.vercel.app/",
        description: "O projeto consiste em um currículo online criado para o robô Johnny Five, utilizando HTML e CSS. A aplicação é organizada em duas páginas: a página principal (`index.html`), que apresenta as informações gerais do currículo, e uma página complementar (`experiencia.html`), que detalha a experiência profissional. O currículo é estruturado com seções como Perfil, Competências, Formação Acadêmica e Contato, utilizando elementos como listas, links e imagens. A segunda parte do projeto foca no aprimoramento visual com o uso de CSS, incluindo a centralização do conteúdo, escolha de cores e fontes, e a aplicação de estilos para as seções. O código HTML foi validado no W3C Validator para garantir a conformidade com os padrões web.",
    },
];

const StyledProjects = styled("div")(() => ({
    background: "linear-gradient(0deg, rgb(0, 0, 0) 15%, rgb(95, 18, 90) 90%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 0",
}));

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const swiperRef = useRef(null);

    const toggleExpansion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    const NavButton = styled(Button)(({ }) => ({
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        color: "white",
        borderRadius: "50%",
        minWidth: "40px",
        height: "40px",
        backgroundColor: " rgba(177, 0, 186, 0.7)",
        "&:hover": {
            backgroundColor: "rgba(98, 98, 98, 0.7)",
        },
    }));


    return (
        <StyledProjects>
            <Container maxWidth="lg">
                <Typography variant="h2" color="primary.contrastText" textAlign="center" mb={4}>
                    Meus Projetos
                </Typography>

                <Box sx={{ position: "relative", width: "80%", margin: "auto" }}>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={20}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        breakpoints={{
                            600: { slidesPerView: 2, slidesPerGroup: 2 },
                            900: { slidesPerView: 3, slidesPerGroup: 3 },
                        }}
                        loop
                        modules={[Navigation]}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{ textAlign: "center", p: 2, background: "rgba(241, 240, 240, 0.45)", borderRadius: "20px" }}>
                                    <img src={project.image} alt={project.name} style={{ width: "100%", borderRadius: "10px" }} />
                                    <Typography variant="h5" sx={{ color: "white", mt: 2 }}>{project.name}</Typography>
                                    <Typography variant="subtitle1" sx={{ color: "white", mt: 2 }}>
                                        {expandedIndex === index ? (
                                            <>
                                                {project.description}
                                                <Typography component="span" sx={{ color: "#2C3930", textDecoration: "underline", display: "block", mt: 2 }} onClick={() => toggleExpansion(index)} style={{ cursor: "pointer" }}>Ver menos</Typography>
                                            </>
                                        ) : (
                                            <>
                                                {`${project.description.substring(0, 50)}...`}
                                                <Typography component="span" sx={{ color: "#4B164C", textDecoration: "underline", display: "block", mt: 2 }} onClick={() => toggleExpansion(index)} style={{ cursor: "pointer" }}>Ver mais</Typography>
                                            </>
                                        )}
                                    </Typography>
                                    <Button variant="contained" color="primary" href={project.deployLink} sx={{ mt: 2 }} target="_blank">Ver Projeto</Button>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <NavButton onClick={() => swiperRef.current?.slidePrev()} sx={{ left: "-50px" }}>
                    <NavigateBeforeIcon></NavigateBeforeIcon>
                    </NavButton>
                    <NavButton onClick={() => swiperRef.current?.slideNext()} sx={{ right: "-50px"}}>
                    <NavigateNextIcon></NavigateNextIcon>
                    </NavButton>
                </Box>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
