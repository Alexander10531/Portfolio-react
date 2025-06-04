import React from "react";
import './Modal-form.css';
import { Box, Button, Modal, Typography } from "@mui/material";


export default function ModalForm() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'red',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Formulario enviado");
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
                    <form action="">
                        <input type="text" placeholder="Nombre del producto" />
                        <input type="text" placeholder="Modelo del producto" />
                        <select name="" id="">
                            <option value="">Seleccione una opcion</option>
                            <option value="">Opcion 1</option>
                            <option value="">Opcion 2</option>
                            <option value="">Opcion 3</option>
                        </select>
                        <Button
                            className="full-button"
                            variant="contained">Agregar producto</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );

}
