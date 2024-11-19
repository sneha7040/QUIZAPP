import React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const loginfetch = async (formData) => {
  const res = await axios.post(
    "https://wtsacademy.dedicateddevelopers.us/api/user/signin",
    formData
  );
  return res.data;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: loginfetch,
    onSuccess: (data) => {
      console.log("Data fetched successfully", data);
      if (data.token && data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("first_name", data.data.first_name);
        localStorage.setItem("profile_pic", data.data.profile_pic);

        toast.success("Login successful");
        navigate("/");
        window.location.reload();
      } else {
        toast.error("Invalid Username or Password");
      }

    
    },
    onError: (error) => {
      console.log("Data fetching error", error);
      toast.error("Invalid Username or Password");
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("password", data.password);
    formData.append("email", data.email);

    mutate(formData);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              borderRadius: "15px",
              boxShadow: "0px 8px 15px rgba(227, 37, 252, 0.7)",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "700" }}>
              SIGN IN
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                })}
                sx={{
                  borderRadius: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
                label="Your Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />
              <TextField
                {...register("password", {
                  required: "Password is required",
                })}
                sx={{
                  borderRadius: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password && errors.password.message}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                sx={{
                  marginTop: 2,
                  borderRadius: "15px",
                  backgroundColor: "#f0ac0e",
                  background: "linear-gradient(135deg, #6a11cb, #e325fc)",
                }}
              >
                SIGN IN
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
