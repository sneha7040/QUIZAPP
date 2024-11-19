import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import pro from "../../../images/pro.gif";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../Component/Navber";

export const profile_pic = (media) => {
  if (!media) return "";
  return `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${media}`;
};

const pages = ["HOME", "REGISTER", "LOGIN"];

function Header() {
  const navigate = useNavigate();
  const [loginusername, setLoginUserName] = React.useState("");
  const [logintoken, setToken] = React.useState("");
  const [loginimage, setImage] = React.useState("");

  React.useEffect(() => {
    setLoginUserName(localStorage.getItem("first_name"));
    setToken(localStorage.getItem("token"));
    setImage(localStorage.getItem("profile_pic"));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="static"
      sx={{ background: "linear-gradient(135deg, #6a11cb, #e325fc)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <PsychologyAltIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "cursive",
              fontWeight: "bold",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              mr: 2,
            }}
          >
            <img src={pro} alt="Logo" width={50} />
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`/${page.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page === "LOGIN" && logintoken ? (
                      <Button
                        onClick={logout}
                        sx={{
                          fontFamily: "cursive",
                          fontWeight: "600",
                          color: "text.primary",
                        }}
                      >
                        Logout
                      </Button>
                    ) : (
                      <Typography
                        textAlign="center"
                        sx={{ fontFamily: "cursive", color: "inherit" }}
                      >
                        {page}
                      </Typography>
                    )}
                  </Link>
                </MenuItem>
              ))}
            </Menu>

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "cursive",
                fontWeight: "bold",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={pro} alt="Logo" width={50} />
            </Typography>
          </Box>

          {/* Navigation for desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                {page === "LOGIN" && logintoken ? (
                  <Button
                    onClick={logout}
                    sx={{
                      fontFamily: "cursive",
                      fontWeight: "600",
                      color: "white",
                      mx: 1,
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    sx={{
                      fontFamily: "cursive",
                      fontWeight: "600",
                      color: "white",
                      mx: 1,
                    }}
                  >
                    {page}
                  </Button>
                )}
              </Link>
            ))}
          </Box>
          <Navbar />
          {/* User greeting and avatar */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {logintoken && (
              <Typography
                sx={{
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  color: "white",
                  mr: 2,
                }}
              >
                {loginusername}
              </Typography>
            )}
            <Tooltip title="Profile">
              <Avatar
                alt="Profile"
                src={
                  loginimage
                    ? profile_pic(loginimage)
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKo_MZZHKWs2WHeh3-8w_5-m9KeXJ9WPZ5WQ&s"
                }
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
