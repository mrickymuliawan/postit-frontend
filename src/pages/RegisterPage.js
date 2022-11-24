import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import React from 'react'
import Colors from '../styles/Colors'
import logo from '../assets/logo_postit.png'
import updateImg from '../assets/undraw_update.png'
import { Link } from 'react-router-dom'

function RegisterPage() {

  const submitForm = (value) => {
    console.log(value);
  }

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
        <Typography.Title level={2}>Register</Typography.Title>

        <Form
          layout='vertical'
          onFinish={submitForm}
        >
          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true }]}
          >
            <Input size='large' />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true }]}

          >
            <Input size='large' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true }]}

          >
            <Input.Password size='large' />
          </Form.Item>

          <Form.Item
            label='Confirm Password'
            name='confirmPassword'
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password size='large' />
          </Form.Item>

          <Button htmlType='submit' block size='large' shape='round' style={{ background: Colors.green2, color: 'white' }}
          >Register
          </Button>
        </Form>

        <br /><br />
        <p>Already have an account? <Link to={'/login'}>Login here</Link> </p>

      </Col>
    </Row>
  )
}

export default RegisterPage
