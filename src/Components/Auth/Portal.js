import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';


function Portal() {
    const [showLogin, setShowLogin] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [displayName, setDisplayName] = useState()

    //Login/Signup toggle
    const toggleLoginSignup = () => { setShowLogin(!showLogin) }
    const submitForm = () => console.log(`Form is sent!\nemail: ${email}\ndisplayName: ${displayName}\npassword: ${password}`)

    
    return (
        <>
            {showLogin
            ? <Login
                email={email}
                setPassword={setPassword}
                setEmail={setEmail}
                toggle={toggleLoginSignup}
                submitForm={submitForm}
                displayName={displayName}
                setDisplayName={setDisplayName}
            />

            : <Signup
                email={email}
                password={password}
                setPassword={setPassword}
                setEmail={setEmail}
                toggle={toggleLoginSignup}
                submitForm={submitForm}
                displayName={displayName}
                setDisplayName={setDisplayName}
            />
            }
        </>
    )
}

export default Portal