import React, {useTransition} from "react";
import {Box, Button, Grid2, Paper, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../constant/Route";

function RegisterView()
{
    const navigate = useNavigate();
    const [isTransition, startTransition] = useTransition();
    const [error, setError] = useState({});

    let username = "";
    let password = "";
    let rePassword = "";

    const checkError = (field) => {
        return false;
    }

    const checkRePassword = () => {
        return password === rePassword;
    }

    const redirectToLogin = (event) => {
        event.preventDefault();
        startTransition(() => {
            navigate(ROUTES.LOGIN.PATH);
        });
    }

    const submitRegisterForm = (event) => {
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <Paper
                sx={{
                    position: "absolute",
                    width: "40%",
                    height: "450px",
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
                    <b>Sign Up</b>
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
                                onChange={(event) => {username = event.target.value}}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField
                                error={checkError("password")}
                                required={true}
                                fullWidth={true}
                                id={"outlined-required"}
                                label={"Password"}
                                type="password"
                                onChange={(event) =>{password=event.target.value}}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField
                                error={checkRePassword()}
                                required={true}
                                fullWidth={true}
                                id={"outlined-required"}
                                label={"Re-password"}
                                type="password"
                                onChange={(event) =>{rePassword=event.target.value}}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <Button
                                fullWidth={true}
                                variant={"contained"}
                                size={"large"}
                                onClick={submitRegisterForm}
                                disabled={isTransition}
                            >
                                <b>Register</b>
                            </Button>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography
                                variant={"body1"}
                                align={"center"}
                            >
                                Already had an account?<Button variant={"text"} onClick={redirectToLogin} disabled={isTransition}>Login</Button>
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>
            </Paper>

        </React.Fragment>
    )
}

export default RegisterView;