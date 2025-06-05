import React, { useState } from "react";
import './Modal-form.css';
import { Box, Button, Modal } from "@mui/material";
import { createProduct } from "../Table/serviceProducts";
import type { newProductRequest } from "../../interfaces/Product";

export default function ModalForm() {

    const [formData, setFormData] = useState<newProductRequest>({
        idEstado : 1, idCategoria : 1, nombreProducto : "", modeloProducto : ""}); 

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

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

        console.log(formData); 
        event.preventDefault();
        createProduct(formData)
            .then(response => {
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
                        <input
                            onChange={handleChangeInput}
                            name="nombreProducto"
                            type="text"
                            placeholder="Nombre del producto" />
                        <input
                            onChange={handleChangeInput}
                            name="modeloProducto"
                            type="text"
                            placeholder="Modelo del producto" />
                        <select
                            onChange={handleChangeSelect} 
                            name="idCategoria" id="idCategoria">
                            <option value="">Seleccione una opcion</option>
                            <option value="1">Televisores</option>
                            <option value="2">Monitores</option>
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
