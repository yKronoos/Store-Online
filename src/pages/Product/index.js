import { Box, Button, Modal, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import RequestForm from "../../forms/request-form";
import ListProduct from "./ListProduct/index"
import ProductForm from "../../forms/product-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '55vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Product() {
    /* Modal */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box >
            <Box sx={{textAlign: "center", padding: 1}}>
                <Button variant="contained" color="success" endIcon={<AddIcon />} onClick={handleOpen}>Adicionar novo Produto</Button>
            </Box>
            
            {/* Table */}
            <ListProduct></ListProduct>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Realize seu produto
                    </Typography>
                    <Box>
                        <ProductForm />
                    </Box>
                </Box>
            </Modal>
        </Box>

    );
}
