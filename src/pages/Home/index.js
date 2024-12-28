import * as React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/header';
import Order from '../Order/order';
import Product from '../Product';

function getData(val){
    // do not forget to bind getData in constructor
    console.log(val);
}

export default function Home() {
    const [view, setView] = React.useState(0);

    function chooseView(view){
        setView(view)
    }

    return (
       <Box>
            <Header chooseView={chooseView}></Header>
            <Box sx={{marginLeft: 30}}>
                {view === 0 ? 
                <Order></Order> :
                <Product></Product>}
            </Box>
       </Box>

    );
}
