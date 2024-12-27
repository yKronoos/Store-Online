import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import * as React from 'react';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));



export default function RequestForm() {

    const [productSelected, setproductSelected] = React.useState('');
    const [quantity, setquatity] = React.useState('1');
    const [products, setproducts] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0.0);

    const selectProduct = (event) => {
        const product = event.target.value
        setproductSelected(product);
        calcTotalPrice(product.price, quantity)
    };

    const selectQuantity = (event) => {
        const quant = event.target.value
        setquatity(quant);
        calcTotalPrice(productSelected != '' ? productSelected.price : 0.0 , quant)
    };

    function calcTotalPrice(price, quant){
        setTotalPrice(price ? price * Number(quant) : 0.0)
    }

    React.useEffect(() => {
        async function loadProducts() {
            /* Get Product Array */
            //const response  = await

            const response = [
                { id: 1, name: 'Test', price: 21 },
                { id: 2, name: 'Test2', price: 22 },
                { id: 3, name: 'Test3', price: 23 },
                { id: 4, name: 'Test4', price: 24 },
                { id: 5, name: 'Test5', price: 25 },
                { id: 6, name: 'Test6', price: 26 },
            ]

            setproducts(response)
        }

        loadProducts()
    }, [])

    return (
        <Stack spacing={2} direction="row" sx={{ margin: 2 }}>
            <Box sx={{ flexGrow: 1, top: 5 }}
                component="form"
                noValidate
                autoComplete="off"
                width="60%"
            >
                <Grid container spacing={2}
                    height="25vh"
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                >
                    <Grid size={8}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="id-product-label">Produto</InputLabel>
                            <Select
                                labelId="id-product-label"
                                id={productSelected.id}
                                value={productSelected}
                                label="Produto"
                                onChange={selectProduct}
                            >
                                {products.map((product) => {
                                    return (
                                        <MenuItem value={product}>{product.name}</MenuItem>
                                    )
                                })}
                                {/* <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid size="grow">
                        <TextField
                            required
                            id="quantity"
                            label="Quantidade"
                            defaultValue="1"
                            InputProps={{ inputProps: { min: 1 } }}
                            type="number"
                            size="small"
                            onChange={selectQuantity}
                        />
                    </Grid>


                </Grid>

            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box height="25vh">
                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid size={8}>
                        <Typography level="body-sm" sx={{ fontSize: "0.8rem" }}>Preço do Produto:</Typography>
                    </Grid>
                    <Grid size={4} sx={{ justifyItems: "flex-end" }}>
                        <Typography level="body-sm" sx={{ fontSize: "0.8rem" }}> R$ {productSelected != '' ? productSelected.price : '0'}</Typography>
                    </Grid>

                    <Grid size={8} >
                        <Typography level="body-sm" sx={{ fontSize: "0.8rem" }}> Quantidade:</Typography>
                    </Grid>
                    <Grid size={4} sx={{ justifyItems: "flex-end" }}>
                        <Typography level="body-sm" sx={{ fontSize: "0.8rem" }}>{'(x' + quantity + ')'}</Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Paper elevation={3} sx={{ marginTop: 2, marginBottom: 2, height: 35 }}>
                    <Grid container spacing={2} sx={{ marginBottom: 2, padding: 1 }}>

                        <Grid size={6}>
                            <Typography level="body-sm" sx={{ fontSize: "0.8rem" }}>Total do Pedido:</Typography>
                        </Grid>
                        <Grid size={6} sx={{ justifyItems: "flex-end" }}>
                            <Typography level="body-sm" sx={{ fontSize: "0.8rem" }}> R$ {totalPrice}</Typography>
                        </Grid>

                    </Grid>
                </Paper>
                <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                    <Grid size="grow">
                        <Button sx={{ width: '100%' }} variant="contained">Finalizar pedido</Button>
                    </Grid>
                </Grid>
            </Box>
        </Stack >



    )
}