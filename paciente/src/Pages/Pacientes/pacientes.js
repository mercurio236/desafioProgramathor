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
    Avatar,
    Typography,
    Divider
} from '@material-ui/core';
import { useSelector } from 'react-redux'
import useMakeStyles from "./styles";


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
            nome: cliente.name.first,
            sobrenome: cliente.name.last,
            email: cliente.email,
            genero: cliente.gender,
            nascimento: cliente.dob.date,
            telefone: cliente.cell,
            nascionalidade: cliente.nat,
            id: cliente.id.value,
            cidade: cliente.location.city,
            pais: cliente.location.country,
            estado: cliente.location.state,
            codigoPostal: cliente.location.postcode,
            ruaNome: cliente.location.street.name,
            ruaNumero: cliente.location.street.number,
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
                    <div className={classes.container}>
                        <TextField
                            className={classes.input}
                            placeholder="Pesquisa"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.table}>
                        <TableContainer component={Paper} >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell>Birth</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className={classes.tableBody}>
                                    {clientes &&
                                        clientes.map((cliente) => (
                                            <TableRow onClick={() => handleDialogOpen(cliente)} key={cliente.index}>
                                                <TableCell>{`${cliente.name.first} ${cliente.name.last}`}</TableCell>
                                                <TableCell>{cliente.gender === 'female' ? 'femenino' : 'masculino'}</TableCell>
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
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle className={classes.title} id="alert-dialog-title">Infomações do Usuário</DialogTitle>
                            <DialogContent>
                                <div className={classes.avatar}>
                                    <Avatar alt="Remy Sharp" src={userSelected.imagemUser} className={classes.imgUser} />
                                </div>
                                <DialogContentText className={classes.textInfoUser} >
                                    <Typography>Nome: {`${userSelected.nome} ${userSelected.sobrenome}`}</Typography>
                                    <Divider />
                                    <Typography>E-mail: {userSelected.email} </Typography>
                                    <Divider />
                                    <Typography>Gênero: {userSelected.genero === 'female' ? 'feminino' : 'masculino'}</Typography>
                                    <Divider />
                                    <Typography>Nascimento: {userSelected.nascimento}</Typography>
                                    <Divider />
                                    <Typography>Telefone: {userSelected.telefone}</Typography>
                                    <Divider />
                                    <Typography>Nacionalidade: {userSelected.nascionalidade}</Typography>
                                    <Divider />
                                    <Typography>Endereço: </Typography>
                                    <div className={classes.location}>
                                        <Typography>{`Cidade: ${userSelected.cidade} Codigo Postal: ${userSelected.codigoPostal}`}</Typography>
                                        <Typography>{`País: ${userSelected.pais} Estado: ${userSelected.estado}`}</Typography>
                                        <Typography>{`Rua: ${userSelected.ruaNome} Numero: ${userSelected.ruaNumero}`}</Typography>
                                    </div>
                                    <Divider />
                                    <Typography>ID: {userSelected.id}</Typography>
                                    <Divider />
                                    <Typography>URL: { }</Typography>
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