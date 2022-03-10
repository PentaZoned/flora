import { makeStyles } from '@mui/styles';
 
const useStyles = makeStyles((theme) => ({

        root: {
            height: "100vh",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        },
        spinPage: {
            background: "#263238",
            color: "#fafafa",
        },
        imagelist: {
            justify: "center",
            width: "80vw",
            height: "100vw",
        },
        buttons: {
            marginRight: "20px",
            marginTop: "40px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
        },
        formButton: {
            marginTop: "3vw",
            marginBottom: "5vw",
        },
        image: {
            width: "22vw",
            height: "30vw",
            marginTop: "5vw",
        },
        clickableIcon: {
            display: "flex",
            marginTop: "5vw",
            marginBottom: "5vw",
            marginRight: "5vw",
            marginLeft: "5vw",
            transform: "scale(2.7)",
            color: "black",
            '&:hover': {
                color: "red",
            }
        },
        navStyle: {
            backgroundColor: "#ffc107",
            color: "black",
        },
        field: {
            marginBottom: "1vw",
            display: "block",
        }
    }));

export default useStyles;