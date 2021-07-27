import { useState } from "react"
import { Form, Input, Button, Typography, Card, message } from 'antd'
import { useHistory } from "react-router-dom";
import APIURL from "../../Utils/Environment";

const { Title } = Typography

function Signup({email, setEmail, password, setPassword, displayName, setDisplayName, toggle, submitForm}){
    const history = useHistory();
    const [confirmPassword, setConfirmPassword] = useState()
    const [emailValid, setEmailValid] = useState(false)

    const success = () => {
        message.success('You are registered!')
        history.push({
            pathname: "/trips",
        })
    }

    
    const confirmAndSend = () => {
        if (password === confirmPassword && password.length > 4 && emailValid === true) {
            userSignup()
            success()
        } else if (emailValid !== true) {
            message.error('Please enter a valid email.')
        } else if (password.length <5) {
            message.error('Password must be at least 5 characters.')
        } else {
            message.error('Passwords must match.')
        }
    }

    // User Signup 
    function userSignup() {
    console.log('userSignup function called')

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let displayName = document.getElementById('displayName').value

    let newUserData = {
            email: email,
            password: password,
            displayName: displayName
    }
    console.log(`newUserData --> ${newUserData.email} ${newUserData.password} ${newUserData.displayName}`);

    fetch(`${APIURL}/user/signup`, {
        method: 'POST',
        headers: new Headers ({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newUserData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })
    
}

    return (
        <>
        <div className='site-card-border-less-wrapper'>
        <Card className='portalCard' title={<Title level={2}>Sign Up</Title>} bordered={false}>
            <Form
                name="basic"
                initialValues={{
                remember: true,
                }}
            >
                <Form.Item
                name="email"
                id='email'
                rules={[
                {
                    required: true,
                    type: 'email',
                    message: 'Please input your email.'
                },
                ]}
            >
                <Input id='email' style={{ width: '100%' }} placeholder='Email'
                onChange={(e) => { 
                setEmail(e.target.value) 
                if(e.target.value.includes('@') && e.target.value.includes('.')) {
                    setEmailValid(true)
                } else {
                    setEmailValid(false)
                }
                }}/>
                </Form.Item>
                <Form.Item
                name="displayName"
                id='displayName'
                rules={[
                {
                    required: true,
                    message: 'Please input your Display Name.',
                },
                ]}
            >
                <Input id='displayName' style={{ width: '100%' }} placeholder='Display Name' onChange={(e) => { setDisplayName(e.target.value) }}/>
                </Form.Item>
                <Form.Item
                name="password"
                id='password'
                rules={[
                { required: true, message: 'Please input your password.'},
                { min: 5, message: 'Password must be a minimum of 5 characters.'}
                ]}
            >
                <Input.Password id='password'  style={{ width: '100%' }} placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value) }}/>
                </Form.Item>
                <Form.Item
                name="confirm"
                rules={[
                { required: true, message: 'Please confirm your password.'},
                ]}
            >
                <Input.Password  style={{ width: '100%' }} placeholder='Confirm Password' type="password" onChange={(e) => { setConfirmPassword(e.target.value) }}/>
                </Form.Item>
                

                <Form.Item>
                    <Button  style={{ width: '100%' }} className='button' htmlType="submit" onClick={confirmAndSend}>
                    Sign Up
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Typography className='portalCardTypography'>Already have an account?</Typography>
                    <Button  style={{ width: '100%' }} className='button' htmlType="submit" onClick={toggle}>
                    Log In
                    </Button>
                </Form.Item>

            </Form>
            </Card>
        </div>
        </>
        )
    }


export default Signup