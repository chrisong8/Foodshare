import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#A2C2D4',
        fontFamily: 'Calibri',
        fontWeight: 500
    },
    image: {
        marginLeft: '30px',
    },
    footer: {
        marginTop: '50px',
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontSize: '14px',
        display: 'block'
    },
}));