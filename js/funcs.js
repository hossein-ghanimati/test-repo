const login = () => {
    return true
}
const register = (userData) => {
    console.log(`The New User Registered By Tht Data => ${userData}`)
}
const getMe = (userToken) => {
    if (!userToken) return false
        
    console.log(`User Token Was Valid, Token => ${userToken}`);
}
    
