import { useRoutes } from "react-router-dom";
import { Welcome } from "./views/Welcome";
import { Home } from "./views/Home";
import { SubFolder } from "./views/Subfolders";


export const AppRouter = () => {
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
                {
                    path: "home", element: <Home />,
                }, {
                    path: "subfolder", element: <SubFolder/>
                }
            ]
        }
    ]);

    return element;
}