import axios from "axios";

function getCSRFToken()
{
    return localStorage.getItem("csrf_token");
}

export function sendRequest(options)
{
    console.log(process.env)
    options = Object.assign({baseURL: process.env.REACT_APP_SERVER_URL}, options);
    console.log(options);
    !("headers" in options) && (options.headers = {});
    !("X-CSRF-Token" in options.headers) && (options.headers["X-CSRF-Token"] = getCSRFToken());

    return axios(options);
}