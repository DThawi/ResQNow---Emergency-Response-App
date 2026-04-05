import{StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    title: {
        fontSize:18,
        fontWeight: 600,
        marginBottom: 20,
        lineHeight: 18,

    },
    textHeader: {
        color: "#003049",
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 28,
        marginBottom: 5,
    },

    textSubHeader: {
        color: "#2B2D42",
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 20,
    },

    textContent:{
        fontSize: 14,
        lineHeight: 20,
        color: "#2B2D42",
        fontWeight: 400,
        marginBottom: 10,

    },
    card:{
        backgroundColor: "#f9f9f9",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
})