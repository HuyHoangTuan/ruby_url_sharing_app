import {RouterProvider} from "react-router-dom";
import {BROWSER_ROUTES} from "./constant/Route";

function App() {
    return (
        <RouterProvider router={BROWSER_ROUTES}/>
    );
}

export default App;
