'use client'

import { Form, Input, Button, Card, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const { Title } = Typography

interface LoginFormValues {
	email: string
	password: string
}

export default function LoginPage() {
	const router = useRouter()
	const [form] = Form.useForm()

	const onFinish = async (values: LoginFormValues) => {
		try {
			// Здесь будет логика авторизации
			message.success('Успешный вход!')
			router.push('/dashboard')
		} catch (error) {
			message.error('Ошибка входа')
		}
	}

	return (
		<div
			style={{
				maxWidth: '400px',
				margin: '50px auto',
				padding: '0 20px',
			}}
		>
			<Card>
				<Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
					Вход в систему
				</Title>

				<Form form={form} name='login' onFinish={onFinish} layout='vertical'>
					<Form.Item
						name='email'
						rules={[
							{ required: true, message: 'Введите email' },
							{ type: 'email', message: 'Введите корректный email' },
						]}
					>
						<Input prefix={<UserOutlined />} placeholder='Email' size='large' />
					</Form.Item>

					<Form.Item
						name='password'
						rules={[{ required: true, message: 'Введите пароль' }]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							placeholder='Пароль'
							size='large'
						/>
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' block size='large'>
							Войти
						</Button>
					</Form.Item>

					<div style={{ textAlign: 'center' }}>
						<Link href='/register'>Зарегистрироваться</Link>
						<span style={{ margin: '0 10px' }}>|</span>
						<Link href='/forgot-password'>Забыли пароль?</Link>
					</div>
				</Form>
			</Card>
		</div>
	)
}
