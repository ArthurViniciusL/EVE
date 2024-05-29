import { useRoutes } from "react-router-dom";
import { Welcome } from "../views/Welcome";
import { Home } from "../views/Home";


export const Router = () => {
    let element = useRoutes([

        {
            path: '*',
            element: <h1>404 Not Found</h1>
        },

        {
            path: "/",
            element: <Welcome />

        },
        {
            element: <Home />,
            children: [
                { path: "home", element: <Home /> }
            ]
        },
    ]);

    return element;
}