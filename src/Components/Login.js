import { useState } from "react"
import { Form, Input, Button, Typography, Card, Checkbox } from 'antd'

const { Title } = Typography

function Login({email, password, setEmail, setPassword, displayName, setDisplayName, toggle, submitForm}){
    const [confirmPassword, setConfirmPassword] = useState()
    const [failMessage, setFailMessage] = useState("")
    
    // Helper Function
    const confirmAndSend = () => {
    if (password === confirmPassword) {
        submitForm()
    } else {
        setFailMessage("The Passwords don't match")
        setTimeout(() => { setFailMessage("") }, 4000)
    }
    }


    return (
        <div className='root'>
        <div className='site-card-border-less-wrapper'>
        <Card className='portalCard' title={<Title level={2}>Log In</Title>} bordered={false} >
            <Form
                name="basic"
                initialValues={{
                remember: true,
                }}
            >
                <Form.Item
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input style={{ width: '65%' }} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}/>
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
                <Input id='displayName' style={{ width: '65%' }} placeholder='Display Name' onChange={(e) => { setDisplayName(e.target.value) }}/>
                </Form.Item>
                <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password style={{ width: '65%' }} placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value) }}/>
                </Form.Item>

                <Form.Item className='checkbox' name="remember" valuePropName="checked" wrapperCol={{ offset: -8, span: 17 }}>
                    <Checkbox className='portalCardTypography'>Remember me</Checkbox>
                </Form.Item>
            
                <Form.Item>
                    <Button style={{ width: '65%' }} className='button' htmlType="submit" onClick={confirmAndSend}>
                    Log In
                    </Button>
                </Form.Item>
                
             

                <Form.Item>
                {/* <Typography className='portalCardTypography'>New here? <Typography.Link className='root' href='{toggle}'>Sign up</Typography.Link> to start planning your trip.</Typography> */}
                    <Typography className='portalCardTypography'>New here? Sign up to plan your trip.</Typography>
                    <Button style={{ width: '65%' }} className='button' htmlType="submit" onClick={toggle}>
                    Signup
                    </Button>
                </Form.Item>
            </Form>
            </Card>
        </div>
        </div>
        )
    }


// User Login
// function login() {
//     console.log('login function called');
    // let email = document.getElementById('emailLogin').value
    // let password = document.getElementById('passwordLogin').value
    // console.log(email, password)
    
    // const loginData = {
    //     email: email,
    //     password: password
    // }
    // console.log(loginData)

    // fetch(`http://localhost:3000/user/login`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(loginData)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     let token = data.sessionToken
    //     localStorage.setItem('sessionToken', token)
    //     tokenChecker()
    // })
    // .catch(err => {
    //     console.error(err)
    // })


export default Login;