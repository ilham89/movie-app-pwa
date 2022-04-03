import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#556cd6",
            dark: "#eb3452",
        },
        secondary: {
            main: "#19857b",
        },
        info: {
            light: "#DBE3FF",
            main: "#88A4E8",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: "Quicksand",
    },
});

export default theme;
