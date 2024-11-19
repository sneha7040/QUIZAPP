import React from "react";
import Slider from "react-slick";
import { Container, Typography, Button, Grid, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../images/removebanner1.png";
import banner2 from "../../images/img2-removebg-preview (1).png";
import banner3 from "../../images/c911d053bfe16cf1fa587257232014e3-removebg-preview.png";

const QuizAppBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  const banners = [
    {
      image: banner,
      title: "Quiz App",
      description: "Challenge yourself with exciting quizzes!",
    },
    {
      image: banner2,
      title: "Explore Topics",
      description: "Find quizzes on a variety of topics.",
    },
    {
      image: banner3,
      title: "Compete with Friends",
      description: "Test your knowledge and challenge your friends!",
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: "10px", md: "20px" },
        borderRadius: "10px",
        backgroundColor: "background.paper",
      }}
    >
      {banners && Array.isArray(banners) ? (
        <Container>
          <Slider {...settings}>
            {banners.map((banner, index) => (
              <div key={index}>
                <Grid
                  container
                  spacing={4}
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* Content Section */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: " #e325fc",
                        fontSize: { xs: "24px", sm: "28px", md: "45px" },
                        fontWeight: "900",
                        textAlign: { xs: "center", md: "left" },
                        marginTop: { md: "98px" },
                      }}
                    >
                      {banner.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.primary",
                        fontSize: { xs: "15px", sm: "16px", md: "20px" },
                        fontStyle: "italic",
                        textAlign: { xs: "center", md: "left" },
                        marginBottom: "20px",
                      }}
                    >
                      {banner.description}
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        display: "block",
                        margin: { xs: "0 auto", md: "0" }, 
                        padding: "12px 50px",
                        background: "linear-gradient(135deg, #6a11cb, #e325fc)",
                        boxShadow: "0px 8px 15px rgba(227, 37, 252, 0.4)",
                        borderRadius: "30px",
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, #2575fc, #6a11cb)",
                          boxShadow: "0px 8px 15px rgba(227, 37, 252, 0.7)",
                        },
                      }}
                    >
                      Show
                    </Button>
                  </Grid>

                  {/* Image Section */}
                  <Grid item xs={12} md={6}>
                    <div
                      style={{
                        width: "100%",
                        height: "auto", 
                        maxHeight: "500px",
                        overflow: "hidden", 
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={banner.image || "https://via.placeholder.com/400x300?text=No+Image"}
                        alt={banner.title}
                        style={{
                          width: "100%",
                          height: "100%", 
                          objectFit: "cover", 
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </Container>
      ) : (
        <Typography align="center" sx={{ color: "gray" }}>
          No banner data available.
        </Typography>
      )}
    </Paper>
  );
};

export default QuizAppBannerSlider;
