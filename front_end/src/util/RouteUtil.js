import ErrorView from "../component/error/ErrorView";
import {checkLogin} from "./LoginUtil";
import {redirect} from "react-router-dom";
export function createRoute({PATH, ELEMENT, ERROR_ELEMENT=<ErrorView/>, IS_PRIVATE=true, LOADER_REQUEST=null})
{
    return {
        path: PATH,
        element: ELEMENT,
        errorElement: ERROR_ELEMENT,
        loader: async (params) => {
            if (IS_PRIVATE && !checkLogin())
            {
                throw redirect("/login");
            }

            if (LOADER_REQUEST != null)
            {
                let response = await LOADER_REQUEST(params);

                if (response.ok)
                {
                    return new Response(response.data);
                }

                if (response.status === 401)
                {
                    throw redirect("/login");
                }

                throw response;
            }

            return new Response({});
        }
    }
}