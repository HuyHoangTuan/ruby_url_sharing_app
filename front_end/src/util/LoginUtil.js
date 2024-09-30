export function checkLogin()
{
    const token = document.cookie.split("; ").find(row => row.startsWith("jwt="));
    console.log(`Token: ${token}`);
    return token !== undefined;
}