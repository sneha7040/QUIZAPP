import React, { useRef } from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.jpg";
import "../Home/Home.css";
import Cardcom from "../../../Component/Cardcom";
import { Box, Container, Typography } from "@mui/material";
import travel from "../../../images/travel.gif";
import science from "../../../images/science.gif";
import frontend from "../../../images/frontend.gif";
import sports from "../../../images/sports.gif";
import environment from "../../../images/environment.gif";
import backend from "../../../images/backend.gif";
import food from "../../../images/food.gif";
import literature from "../../../images/literature.gif";
import database from "../../../images/database.gif";
import QuizAppBanner from "../../../Component/Banner/Banner";
import QuizAppBannerSlider from "../../../Component/Banner/Banner";

export default function Home() {
  const cardSectionRef = useRef(null);

  return (
    <>
      <QuizAppBannerSlider />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",

          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            color: "text.primary",
            margin: "0 0 15px 0",
            textAlign: "center",
            letterSpacing: "0.9px",
            fontWeight: "1000",
            fontFamily: "cursive",
            position: "relative",
          }}
        >
          Choose Your Topic
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 6,
          alignItems: "center",
          padding: 2,
        }}
        ref={cardSectionRef}
      >
        <Cardcom
          img={frontend}
          alttitle="WEBDEV(FORNTEND)"
          heading={"WEBDEV(FORNTEND)"}
          send={"/webdevfront"}
        />
        <Cardcom
          img={backend}
          alttitle="Webdev(backend)"
          heading={"WEBDEV(BACKEND)"}
          send={"/webdevback"}
        />
        <Cardcom
          img={sports}
          alttitle="SPORTS"
          heading={"SPORTS"}
          send={"/sports"}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 6,
          alignItems: "center",
          padding: 2,
        }}
      >
        <Cardcom
          img={database}
          alttitle="Food and drinks"
          heading={"DATABASE & DATAMANAGEMENT"}
          send={"/database"}
        />
        <Cardcom
          img={travel}
          alttitle="TRAVEL & TOURISM"
          heading={"TRAVEL & TOURISM"}
          send={"/travel"}
        />
        <Cardcom
          img={science}
          alttitle="SCIENCE & TECHNOLOGY"
          heading={"SCIENCE & TECHNOLOGY"}
          send={"/scantech"}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 6,
          alignItems: "center",
          padding: 2,
        }}
      >
        <Cardcom
          img={environment}
          alttitle="Food and drinks"
          heading={"ENVIRONMENT"}
          send={"/environ"}
        />
        <Cardcom
          img={food}
          alttitle="Food and drinks"
          heading={"FOOD & DRINKS"}
          send={"/food"}
        />
        <Cardcom
          img={literature}
          alttitle="LITERATURE"
          heading={"LITERATURE"}
          send={"/lit"}
        />
      </Box>
    </>
  );
}
