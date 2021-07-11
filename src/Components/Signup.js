import { useState } from "react"
import { Form, Input, Button, Typography, Card } from 'antd'

const { Title } = Typography

function Signup({email, setEmail, password, setPassword, displayName, setDisplayName, toggle, submitForm}){
    const [confirmPassword, setConfirmPassword] = useState()
    const [failMessage, setFailMessage] = useState("")
    
    const confirmAndSend = () => {
    if (password === confirmPassword) {
        submitForm()
        userSignup()
    } else {
        setFailMessage("The Passwords don't match")
        setTimeout(() => { setFailMessage("") }, 4000)
    }
    }

    // User Signup 
    function userSignup() {
    console.log('userSignup function called')

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let displayName = document.getElementById('displayName').value

    let newUserData = {
        user: {
            email: email,
            displayName: displayName,
            password: password
        }
    }
    console.log(`newUserData --> ${newUserData.user.email} ${displayName} ${newUserData.user.password}`);

    fetch(`http://localhost:3000/user/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let token = data.confirmToken
        localStorage.setItem('confirmToken', token)
        // tokenChecker()
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
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input id='email' style={{ width: '50%' }} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}/>
                </Form.Item>
                <Form.Item
                name="displayName"
                id='displayName'
                rules={[
                {
                    required: true,
                    message: 'Please input your Display Name!',
                },
                ]}
            >
                <Input id='displayName' style={{ width: '50%' }} placeholder='Display Name' onChange={(e) => { setDisplayName(e.target.value) }}/>
                </Form.Item>
                <Form.Item
                name="password"
                id='password'
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password id='password'  style={{ width: '50%' }} placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value) }}/>
                </Form.Item>
                <Form.Item
                name="confirm"
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ]}
            >
                <Input.Password  style={{ width: '50%' }} placeholder='Confirm Password' type="password" onChange={(e) => { setConfirmPassword(e.target.value) }}/>
                </Form.Item>
                

                <Form.Item>
                    <Button  style={{ width: '50%' }} className='button' htmlType="submit" onClick={confirmAndSend}>
                    Sign Up
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button  style={{ width: '50%' }} className='button' htmlType="submit" onClick={toggle}>
                    Log In
                    </Button>
                    <Typography className='portalCardTypography'>Already have an account?</Typography>
                </Form.Item>

            </Form>
            </Card>
        </div>
        </>
        )
    }


export default Signup