import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
/* import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid"; */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, Card, CardContent, Snackbar } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Home from "../Home";
import { MesssageEnum } from "../../enums/messageEnum";

export default function Login() {
    const [value, setValue] = React.useState('1');
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /* Snack */
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [severity, setSeverity] = React.useState(MesssageEnum.SUCCESS);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    /* Functions */
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("emailLogin")
        const pass = data.get("passwordLogin")

        if (email === 'admin' && pass === 'admin') {
            console.log(1)
            navigate("/order")
        }else{
            setOpen(true)
            setSeverity(MesssageEnum.ERROR)
            setMessage('Credenciais Invalidas!')
        }
    };

    const handleSubmitSignUp = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("emailSignUp")
        const pass = data.get("passwordSignUp")

        setOpen(true)
        setSeverity(MesssageEnum.SUCCESS)
        setMessage('Usuário Cadastrado com Sucesso!')
    };

    /* Return */
    return (
        <Box sx={{
            width: '100%', typography: 'body1', display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <Typography component="h1" variant="h5" sx={{ marginBottom: 3 }}>
                Store Online
            </Typography>
            <Card variant="outlined">
                <CardContent>
                    <TabContext value={value}>
                        {/* Header Tab */}
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', alignContent: "center" }}>
                            <TabList centered={true} onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Login" value="1" />
                                <Tab label="Cadastro" value="2" />
                            </TabList>
                        </Box>

                        {/* Tab Login */}
                        <TabPanel value="1">

                            <Box component="form" onSubmit={handleSubmitLogin} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="emailLogin"
                                    label="Email"
                                    name="emailLogin"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="passwordLogin"
                                    label="Senha"
                                    type="password"
                                    id="passwordLogin"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Lembrar do login"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Entrar
                                </Button>
                            </Box>

                        </TabPanel>
                        {/* Tab Cadastro */}
                        <TabPanel value="2">
                            <Box component="form" onSubmit={handleSubmitSignUp} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="emailSignUp"
                                    label="Email"
                                    name="emailSignUp"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="passwordSignUp"
                                    label="Senha"
                                    type="password"
                                    id="passwordSignUp"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Cadastrar
                                </Button>
                            </Box>
                        </TabPanel>
                    </TabContext>
                </CardContent>

            </Card>
            {/* Message */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
}