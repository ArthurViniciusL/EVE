
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app-routing";

import './styles/style.css';


export const App = () => {

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );

}