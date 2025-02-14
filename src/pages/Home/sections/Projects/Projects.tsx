import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, styled } from "@mui/material";

const projects = [
    {
        name: "Meu Portfólio",
        image: "https://via.placeholder.com/300x200", // Substitua pela sua imagem real
        deployLink: "https://meu-portfolio.vercel.app/",
    },
    {
        name: "Calculadora React",
        image: "https://via.placeholder.com/300x200",
        deployLink: "https://calculadora-react.vercel.app/",
    },
    {
        name: "To-Do List",
        image: "https://via.placeholder.com/300x200",
        deployLink: "https://todo-list.vercel.app/",
    },
];

const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
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
                <Typography variant="h2" color="primary.contrastText" textAlign="center" mb={4}  sx={{ mt: { xs: 10, sm: 30, md: 2 } }} >
                    Meus Projetos
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ backgroundColor: "#ffffff0f", color: "white" }}>
                                <CardMedia component="img" height="200" image={project.image} alt={project.name} />
                                <CardContent>
                                    <Typography variant="h5" textAlign="center">{project.name}</Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={project.deployLink}
                                    >
                                        Ver Projeto
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
