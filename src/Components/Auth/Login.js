import { useState } from "react"
import { Form, Input, Button, Typography, Card, Checkbox } from 'antd'
import { Redirect } from "react-router-dom"
import TripsIndex from "../Trips/TripsIndex"
import { PropertySafetyFilled } from "@ant-design/icons"
import { useHistory } from "react-router-dom";

const { Title } = Typography

function Login({ toggle, token, newToken, previous }){
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const confirmAndSend = () => {
        userLogin()
        history.push(previous)
        // if (userLogin()) {
        //     return <Redirect to ='/' />
        // } else {
        //     return <div>test</div>
        // }

    }

    function userLogin() {
        console.log('userLogin function called')
        let userData = {
                email: email,
                password: password,
        }
        console.log(`userData --> ${userData.email} ${userData.password}`);
    
        fetch(`http://localhost:3000/user/login`, {
            method: 'POST',
            headers: new Headers ({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let dataToken = data.sessionToken
            // localStorage.setItem('token', token)
            newToken(dataToken)
            // props.history.push('/path')
        })
        .catch(err => {
            console.error(err)
        })
        
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
                <Input style={{ width: '100%' }} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}/>
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
                <Input.Password style={{ width: '100%' }} placeholder='Password' type="password" onChange={(e) => { setPassword(e.target.value) }}/>
                </Form.Item>

                <Form.Item className='checkbox' name="remember" valuePropName="checked" wrapperCol={{ offset: -8, span: 17 }}>
                    <Checkbox className='portalCardTypography'>Remember me</Checkbox>
                </Form.Item>
            
                <Form.Item>
                    <Button style={{ width: '100%' }} className='button' htmlType="submit" onClick={confirmAndSend}>
                    Log In
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Typography className='portalCardTypography'>New here? Sign up to plan your trip.</Typography>
                    <Button style={{ width: '100%' }} className='button' htmlType="submit" onClick={toggle}>
                    Sign Up
                    </Button>
                </Form.Item>
            </Form>
            </Card>
        </div>
        </div>
        )
    }

export default Login;