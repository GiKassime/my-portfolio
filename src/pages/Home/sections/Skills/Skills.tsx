import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PythonIcon from "../../../../assets/svg/python-svgrepo-com.svg";
import PhpIcon from "../../../../assets/svg/php2-svgrepo-com.svg";
import MysqlIcon from "../../../../assets/svg/mysql-logo-svgrepo-com.svg";
import HtmlIcon from "../../../../assets/svg/html-5-svgrepo-com.svg";
import CssIcon from "../../../../assets/svg/css-3-svgrepo-com.svg";
import JsIcon from "../../../../assets/svg/javascript-svgrepo-com.svg";

const StyledSkills = styled("div")(() => ({
    background: "linear-gradient(357deg, rgba(100,13,95,1) 0%, rgba(24,24,24,1) 95%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px 0",
}));

const SkillIcon = ({ src, alt }) => (
    <motion.div
        whileHover={{
            rotateY: 360, // Gira 360 graus no eixo Y
            scale: 1.3,   // Aumenta ligeiramente o tamanho
        }}
        transition={{
            type: "spring", // Tipo de transição suave
            stiffness: 100, // Rigidez da animação
            damping: 10,    // Amortecimento da animação
        }}
        style={{
            perspective: "1000px", // Adiciona perspectiva para o efeito 3D
        }}
    >
        <Box sx={{ width: { xs: "130px", md: "150px", lg: "140px" }, height: "auto", display: "flex", justifyContent: "center", pt: "2vh" }}>
            <img src={src} alt={alt} style={{ width: "100%", height: "auto", transformStyle: "preserve-3d" }} />
        </Box>
    </motion.div>
);

const skills = [
    { src: PythonIcon, alt: "Python Icon" },
    { src: CssIcon, alt: "CSS Icon" },
    { src: HtmlIcon, alt: "HTML Icon" },
    { src: PhpIcon, alt: "PHP Icon" },
    { src: MysqlIcon, alt: "MySQL Icon" },
    { src: JsIcon, alt: "JavaScript Icon" }
];

const Skills = () => {
    return (
        <StyledSkills>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    color="primary.contrastText"
                    textAlign="center"
                    mb={3}
                    sx={{ mt: { xs: 5, sm: 10, md: 2 } }}
                >
                    My Skills
                </Typography>
                <Grid container
                    spacing={2}
                    sx={{
                        width: { xs: "70vw", sm: "80vw", md: "70vw", lg: "60vw" },
                        margin: "0 auto"
                    }}
                    justifyContent="center"
                    alignItems="center">
                    {skills.map((skill, index) => (
                        <Grid key={index} item xs={6} sm={4} md={4} lg={3} display="flex" justifyContent="center">
                            <SkillIcon src={skill.src} alt={skill.alt} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;