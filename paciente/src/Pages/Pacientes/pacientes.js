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
    Divider,
    CircularProgress,
    Fade

} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import useMakeStyles from "./styles";
import { reqPacientes } from '../../Componentes/Header/header'


export default function Paciente() {
    const [clientes, setClientes] = useState([])
    const [openDialog, setDialogOpen] = useState(false);
    const [userSelected, setUserSelected] = useState([]);
    const [search, setSearch] = useState('');
    const [filterSearch, setFilterSearch] = useState([])
    const classes = useMakeStyles()
    const [load, setLoad] = useState(false);
    const [query, setQuery] = useState('idle')
    const pacientes = useSelector((state) => state.pacientesState.pacientes)
    const timeRef = React.useRef()
    const dispatch = useDispatch()


    let row = ['Name', 'Gender', 'Birth', 'Actions']

    useEffect(() => {
        handleClickQuery(dispatch)
    }, [])


    useEffect(() => {
        setClientes(pacientes.results)

        clientes && (
            setFilterSearch(
                clientes.filter(cliente => {
                    return cliente.name.first.toLowerCase().includes(search.toLowerCase())
                }
                )
            )
        )

    }, [clientes, pacientes, userSelected, search])

    function handleClickQuery() {
        setQuery('progress');
        reqPacientes(dispatch)

        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }

        timeRef.current = window.setTimeout(() => {
            setQuery('success')
        }, 2000)
    }


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
     
    }

    function handleDialogClose() {
        setDialogOpen(false)
    }




    return (
        <Container fluid>
            <div className={classes.container}>
                <TextField
                    className={classes.input}
                    placeholder="Pesquisa"
                    variant="outlined"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    type="search"

                />
            </div>

            <div>
                {
                    query === 'success' ? (
                        <TableContainer className={classes.tabela} component={Paper} >
                            <Table >
                                <TableHead >
                                    <TableRow>
                                        {
                                            row.map(m => (
                                                <TableCell className={classes.tableRow}>{m}</TableCell>
                                            ))
                                        }

                                    </TableRow>
                                </TableHead>
                                <TableBody className={classes.tableBody}>
                                    {clientes &&
                                        filterSearch.map((cliente) => (
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
                    ) : (
                        <div className={classes.containerLoad}>
                            <Fade
                                in={query === 'progress'}
                                style={{
                                    transitionDelay: query === 'progress' ? '800ms' : '0ms'

                                }}

                            >
                                <CircularProgress />
                            </Fade>
                        </div>
                    )
                }

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
            <div className={classes.btnStyle}>
                <Button variant="outlined" onClick={handleClickQuery}>Load</Button>
            </div>


        </Container>
    )
}
