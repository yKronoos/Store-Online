import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';


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

const CustomTextField = (props) => {
    return (
        <TextField
            {...props}
            size={'small'}
            id='outlined-basic'
            label='Preço*'
            variant='outlined'
        />
    )
}



export default function ProductForm() {

    const [productSelected, setproductSelected] = React.useState('');
    const [quantity, setquatity] = React.useState('1');
    const [products, setproducts] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0.0);

    const [values, setValues] = React.useState({
        numberformat: '',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

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
        <Grid container spacing={2} sx={{ margin: 2 }}>
            <Grid size={8}>
                <TextField
                    required
                    id="outlined-required"
                    label="Nome do Produto"
                    size='small'
                    sx={{ width: "100%" }}
                />
            </Grid>
            <Grid size={4}>
                <NumericFormat
                    value={values.numberformat}
                    onChange={handleChange}
                    customInput={CustomTextField}
                    thousandSeparator
                    valueIsNumericString
                    prefix="R$ "

                    label="react-number-format"
                />
            </Grid>
            <Grid size={8}>

            </Grid>
            <Grid size="grow">
                <Button sx={{ width: '100%' }} variant="contained">Cadastrar</Button>
            </Grid>
        </Grid>



    )
}