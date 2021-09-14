import React from "react";
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
    Paper
} from '@material-ui/core';
import './styles.css'

export default function Paciente() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
    ];
    
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


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
                    <div className="table"  >
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
                                    <TableCell>Arley</TableCell>
                                    <TableCell>Souto</TableCell>
                                    <TableCell>Aguiar</TableCell>
                                    <TableCell>20</TableCell>
                                </TableBody>
                            </Table>

                        </TableContainer>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}