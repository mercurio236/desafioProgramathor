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
    DialogTitle,
    Button,
    Avatar
} from '@material-ui/core';
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

const useMakeStyles = makeStyles ((theme) => ({
    imgUser:{
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
}))

export default function Paciente() {
    const [clientes, setClientes] = useState([])
    const [openDialog, setDialogOpen] = useState(false);
    const [userSelected, setUserSelected] = useState([])
    const classes = useMakeStyles()
    console.log(clientes)
    const pacientes = useSelector((state) => state.pacientesState.pacientes)


    useEffect(() => {
        setClientes(pacientes.results)

    }, [clientes, pacientes, userSelected])

    function handleDialogOpen(cliente) {
        setDialogOpen(true)
        let data = {
            imagemUser: cliente.picture.large,
            nome: cliente.name.first
        }
        setUserSelected(data)
        console.log(data)
    }

    function handleDialogClose() {
        setDialogOpen(false)
    }


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
                                            <TableRow onClick={() => handleDialogOpen(cliente)} key={cliente.index}>
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
                        <Dialog
                            open={openDialog}
                            onClose={handleDialogClose}

                        >
                            <DialogTitle id="alert-dialog-title">Infomações do Usuário</DialogTitle>
                            <DialogContent>
                                <Avatar alt="Remy Sharp" src={userSelected.imagemUser} className={classes.imgUser} />
                                <DialogContentText >
                                    Nome: {userSelected.nome}

                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialogClose} variant="outline">Ok</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Grid>
            </Grid>


        </Container>
    )
}