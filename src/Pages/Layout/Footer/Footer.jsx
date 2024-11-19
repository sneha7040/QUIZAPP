import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(145deg, #6a0dad, #8a2be2)",
        color: "white",
        padding: "20px 0",
        mt: "78px",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Social Media Section */}
      <Box
        sx={{
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "16px", sm: "18px" }, 
            fontWeight: "bold",
            mb: 2,
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          Get connected with us on social networks:
        </Typography>

        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <IconButton
              color="inherit"
              sx={{
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <FacebookIcon sx={{ color: "white", fontSize: { xs: 25, sm: 30 } }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              sx={{
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <TwitterIcon sx={{ color: "white", fontSize: { xs: 25, sm: 30 } }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              sx={{
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <GoogleIcon sx={{ color: "white", fontSize: { xs: 25, sm: 30 } }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              sx={{
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <InstagramIcon sx={{ color: "white", fontSize: { xs: 25, sm: 30 } }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              sx={{
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <LinkedInIcon sx={{ color: "white", fontSize: { xs: 25, sm: 30 } }} />
            </IconButton>
          </Grid>
         
        </Grid>
      </Box>


     
    </Box>
  );
}
