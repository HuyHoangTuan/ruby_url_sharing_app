import React from "react";
import {Box, Button, Grid2, Paper, TextField, Typography} from "@mui/material";
import {ROUTES} from "../../constant/Route";
import {useNavigate} from "react-router-dom";
function LoginView()
{
    const navigate = useNavigate();

    function checkError(field)
    {
        return false;
    }

    function redirectToRegister()
    {
        navigate(ROUTES.REGISTER.PATH);
    }

    return (
        <React.Fragment>
            <Paper
                sx={{
                    position: "absolute",
                    width: "40%",
                    height: "350px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    paddingLeft: "50px",
                    paddingRight: "50px"
                }}
                elevation={3}
            >
                <Typography
                    sx={{
                        marginTop: "20px",
                        marginBottom: "30px"
                    }}
                    variant={"h3"}
                    align={"center"}
                >
                    <b>Login</b>
                </Typography>
                <Box>
                    <Grid2
                        container
                        spacing={2}
                    >
                        <Grid2 size={12}>
                            <TextField
                                error={checkError("username")}
                                required={true}
                                fullWidth={true}
                                id={"outlined-required"}
                                label={"Username"}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField
                                error={checkError("password")}
                                required={true}
                                fullWidth={true}
                                id={"outlined-required"}
                                label={"Password"}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <Button
                                fullWidth={true}
                                variant={"contained"}
                                size={"large"}
                            >
                                <b>Login</b>
                            </Button>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography
                                variant={"body1"}
                                align={"center"}
                            >
                                Have yet to register? <Button variant={"text"} onClick={redirectToRegister}>Register</Button>
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>
            </Paper>

        </React.Fragment>
    )
}

export default LoginView;