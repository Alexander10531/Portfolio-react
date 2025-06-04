import React from "react";
import './Modal-form.css';
import { Box, Button, Modal } from "@mui/material";
import { createProduct } from "../Table/serviceProducts"; 

export default function ModalForm() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#242424',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log("Formulario enviado");
        event.preventDefault();
        createProduct()
            .then(response => {
                console.log("Producto creado:", response);
                handleClose();
            })
            .catch(error => {
                console.error("Error al crear el producto:", error);
            });
    }

    return (
        <>
            <Button
                onClick={handleOpen}
                className="full-button"
                variant="contained">Agregar producto</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form  
                        onSubmit={handleSubmit} 
                        className="form-modal" action="">
                        <input type="text" placeholder="Nombre del producto" />
                        <input type="text" placeholder="Modelo del producto" />
                        <select name="" id="">
                            <option value="">Seleccione una opcion</option>
                            <option value="">Opcion 1</option>
                            <option value="">Opcion 2</option>
                            <option value="">Opcion 3</option>
                        </select>
                        <Button
                            type="submit"
                            className="full-button"
                            variant="contained">Agregar producto</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );

}
