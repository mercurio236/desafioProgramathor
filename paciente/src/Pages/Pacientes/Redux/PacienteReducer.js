import { PACIENTES } from './PacienteActions'

const initialState = {
    pacientes: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case PACIENTES:
            return {
                ...state,
                pacientes: payload
            }
        default:
            return state;
    }
}