import React from "react";
import { Route, Switch } from 'react-router-dom';

import Paciente from "./Pages/Pacientes/pacientes";

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Paciente} />
        </Switch>
    )
}
