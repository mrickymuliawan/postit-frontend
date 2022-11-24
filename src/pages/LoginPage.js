import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import React from 'react'
import Colors from '../styles/Colors'
import logo from '../assets/logo_postit.png'
import updateImg from '../assets/undraw_update.png'

function LoginPage() {
  return (
    <Row>
      <Col xs={24} sm={12} style={{
        background: Colors.green2,
        height: '100vh',
        textAlign: 'center',
        paddingTop: '20vh'
      }}>
        <img src={updateImg} width='70%' />
      </Col>
      <Col xs={24} sm={12} style={{
        background: Colors.beige1,
        height: '100vh',
        padding: 80,
        textAlign: 'center'
      }}>
        <img src={logo} alt="" width='30%' />
        <Typography.Title level={2}>Login</Typography.Title>

        <Form
          layout='vertical'
        >
          <Form.Item
            label='Email'
          >
            <Input size='large' />
          </Form.Item>

          <Form.Item
            label='Password'
          >
            <Input.Password size='large' />
          </Form.Item>

          <Row justify='space-between'>

            <Form.Item>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="">Forgot Password</a>

          </Row>


          <Button block size='large' shape='round'>Login</Button>
        </Form>
        <br />
        <Button block size='large' shape='round' style={{ background: Colors.green2, color: 'white' }}
        >Register
        </Button>
      </Col>
    </Row>
  )
}

export default LoginPage
