
export function getCachedUsername()
{
    return localStorage.getItem("username");
}

export function cacheUsername(username)
{
    localStorage.setItem("username", username);
}

export function checkLogin()
{
    const token = document.cookie.split("; ").find(row => row.startsWith("jwt="));
    console.log(`Token: ${token}`);
    return token !== undefined;
}