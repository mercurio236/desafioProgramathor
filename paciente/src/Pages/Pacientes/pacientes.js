import React, { useState, useEffect } from "react";
import {
    Container,
    TextField,
    Grid,
    Table,
    TableBody,
    TableContainer,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import './styles.css'
import { useSelector } from 'react-redux'

export default function Paciente() {
    const [clientes, setClientes] = useState([])
    console.log(clientes)
    const pacientes = useSelector((state) => state.pacientesState.pacientes)

    useEffect(() => {
        setClientes(pacientes.results)

    }, [clientes, pacientes])






    return (
        <Container fluid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className="container">
                        <TextField
                            className="input"
                            placeholder="Pesquisa"
                            variant="outlined"
                        />
                    </div>
                    <div className="table" >
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell>Birth</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {clientes &&
                                        clientes.map((cliente) => (
                                            <TableRow onClick={() => alert(cliente.name.first)} key={cliente.id}>
                                                <TableCell>{`${cliente.name.first} ${cliente.name.last}`}</TableCell>
                                                <TableCell>{cliente.gender}</TableCell>
                                                <TableCell>{cliente.dob.date}</TableCell>
                                                <TableCell>{cliente.dob.age}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}