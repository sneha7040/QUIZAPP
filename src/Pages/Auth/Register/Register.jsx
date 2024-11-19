import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const loginfetch = async (formData) => {
  const res = await axios.post(
    "https://wtsacademy.dedicateddevelopers.us/api/user/signup",
    formData
  );
  return res;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: loginfetch,
    onSuccess: (data) => {
      if (data.status == 200) {
        toast.success("Registration successful");
        navigate("/login");
      } else {
        toast.error("Email address already in use");
      }
    },
    onError: (error) => {
      toast.error("Plz check once before submit");
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("profile_pic", data.profile_pic[0]);

    mutate(formData);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      sx={{ height: "100vh" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper
            elevation={2}
            sx={{
              padding: 2,
              boxShadow: "0px 8px 15px rgba(227, 37, 252, 0.7)",
              borderRadius: "15px",
            }}
          >
            <Typography variant="h5" gutterBottom>
              <b>SIGN UP</b>
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("first_name", {
                  required: "First Name is required",
                  maxLength: {
                    value: 20,
                    message: "Max length is 20 characters",
                  },
                  minLength: {
                    value: 1,
                    message: "Min length is 1 character",
                  },
                })}
                sx={{
                  borderRadius: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
                label="Your First Name"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.first_name}
                helperText={errors.first_name?.message}
              />

              <TextField
                {...register("last_name", {
                  required: "Last Name is required",
                  maxLength: {
                    value: 20,
                    message: "Max length is 20 characters",
                  },
                  minLength: {
                    value: 1,
                    message: "Min length is 1 character",
                  },
                })}
                sx={{
                  borderRadius: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
                label="Your Last Name"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
              />

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
                helperText={errors.email?.message}
              />

              <TextField
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                sx={{
                  borderRadius: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
                label="Your Password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
              />

              <TextField
                {...register("profile_pic", {
                  required: "Profile picture is required",
                })}
                sx={{
                  borderRadius: "15px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
                fullWidth
                type="file"
                margin="normal"
                variant="outlined"
                error={!!errors.profile_pic}
                helperText={errors.profile_pic?.message}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                sx={{
                  marginTop: 2,
                  backgroundColor: "#f0ac0e",
                  background: "linear-gradient(135deg, #6a11cb, #e325fc)",
                  borderRadius: "15px",
                }}
              >
                Register
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
