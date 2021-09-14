import { applyMiddleware, combineReducers, createStore } from 'redux';

import Paciente from './Pages/Pacientes/pacientes';

const Reducer = combineReducers({
    pacienteState: Paciente
})

export default createStore(Reducer)