import { makeStyles } from '@material-ui/core/styles';

const useMakeStyles = makeStyles((theme) => ({
    container: {
        marginTop: '8%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    imgUser: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    textInfoUser: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content'

    },
    input: {
        width: '50%'
    },
    location: {
        flexDirection: 'column',
        display: 'flex',
        marginLeft: 5
    },
    avatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    title: {
        textAlign: 'center'
    },
    tabela: {
        overflowX: 'hidden',
        height: '70%',
        width: '96%',
        position: 'fixed',
        borderRadius: 10,
        
    },

    tableBody: {
        cursor: 'pointer',
    }
}))

export default useMakeStyles