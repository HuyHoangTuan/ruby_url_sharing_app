import React, {useRef, useState, useTransition} from "react";
import {Box, Button, Grid2, Paper, TextField, Typography} from "@mui/material";
import {ROUTES} from "../../constant/Route";
import {useNavigate} from "react-router-dom";
import {LoadingButton} from "@mui/lab";
import {sendRequest} from "../../util/HttpUtil";
import {ENDPOINT} from "../../constant/Endpoint";
import {cacheUsername, getCachedUsername} from "../../util/LoginUtil";

function LoginView()
{
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [isTransition, startTransition] = useTransition();
    let username = getCachedUsername();
    let password = "";

    const checkError = (field) => {
        return false;
    }

    const redirectToRegister = (event) => {
        event.preventDefault();
        startTransition(() => {
            navigate(ROUTES.REGISTER.PATH);
        });
    }

    const submitLoginForm = (event) => {
        event.preventDefault();
        setSending(true);
        cacheUsername(username);

        let request = sendRequest(
            {
                method: "post",
                url: ENDPOINT.LOGIN,
                data: {
                    authorization: {
                        username: username,
                        password: password
                    }
                }
            }
        );

        request.then((response) => {
            setSending(false);
            console.log(response);
        }).catch((error) => {
            setSending(false);
            console.log(error);
        })
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
                    <b>Sign In</b>
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
                                defaultValue={username}
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
                            <LoadingButton
                                loading={sending}
                                fullWidth={true}
                                variant={"contained"}
                                size={"large"}
                                onClick={submitLoginForm}
                                disabled={isTransition}
                            >
                                <b>Login</b>
                            </LoadingButton>
                        </Grid2>
                        <Grid2 size={12}>
                            <Typography
                                variant={"body1"}
                                align={"center"}
                            >
                                Have yet to register?<Button variant={"text"} onClick={redirectToRegister} disabled={isTransition}>Register</Button>
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>
            </Paper>

        </React.Fragment>
    )
}

export default LoginView;