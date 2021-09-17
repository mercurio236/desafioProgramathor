import { makeStyles } from '@material-ui/core/styles';

const useMakeStyles = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
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
        overflow: 'auto',
        height: 400,
        width: '96%',
        borderRadius: 10,
        marginBottom: 20,
        
    },

    tableBody: {
        cursor: 'pointer',
    },
    containerLoad: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        transform: 'translateY(1%)',
        height: 420
    },
    tableRow:{
        position:'sticky', 
        top:0, 
        background:'#FFF'
    },
    btnStyle:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    }
}))

export default useMakeStyles