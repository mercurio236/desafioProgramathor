import { applyMiddleware, combineReducers, createStore } from 'redux';

import PacientesReducer from './Pages/Pacientes/Redux/PacienteReducer';

const Reducer = combineReducers({
    pacientesState: PacientesReducer
})

export default createStore(Reducer)