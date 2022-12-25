import '../assets/fonts/css/fontiran.css';
import { ThemeProvider } from "@material-ui/core";
import Theme from "../theme/Theme";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Router";

export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    );
}
