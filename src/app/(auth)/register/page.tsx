'use client'

import { Form, Input, Button, Card, Typography, message } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const { Title } = Typography

interface RegisterFormValues {
	username: string
	email: string
	password: string
	confirmPassword: string
}

export default function RegisterPage() {
	const router = useRouter()
	const [form] = Form.useForm()

	const onFinish = async (values: RegisterFormValues) => {
		try {
			// Здесь будет логика регистрации
			message.success('Регистрация успешна!')
			router.push('/login')
		} catch (error) {
			message.error('Ошибка регистрации')
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
					Регистрация
				</Title>

				<Form form={form} name='register' onFinish={onFinish} layout='vertical'>
					<Form.Item
						name='username'
						rules={[{ required: true, message: 'Введите имя пользователя' }]}
					>
						<Input
							prefix={<UserOutlined />}
							placeholder='Имя пользователя'
							size='large'
						/>
					</Form.Item>

					<Form.Item
						name='email'
						rules={[
							{ required: true, message: 'Введите email' },
							{ type: 'email', message: 'Введите корректный email' },
						]}
					>
						<Input prefix={<MailOutlined />} placeholder='Email' size='large' />
					</Form.Item>

					<Form.Item
						name='password'
						rules={[
							{ required: true, message: 'Введите пароль' },
							{ min: 6, message: 'Пароль должен быть не менее 6 символов' },
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							placeholder='Пароль'
							size='large'
						/>
					</Form.Item>

					<Form.Item
						name='confirmPassword'
						dependencies={['password']}
						rules={[
							{ required: true, message: 'Подтвердите пароль' },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve()
									}
									return Promise.reject(new Error('Пароли не совпадают'))
								},
							}),
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							placeholder='Подтвердите пароль'
							size='large'
						/>
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' block size='large'>
							Зарегистрироваться
						</Button>
					</Form.Item>

					<div style={{ textAlign: 'center' }}>
						Уже есть аккаунт? <Link href='/login'>Войти</Link>
					</div>
				</Form>
			</Card>
		</div>
	)
}
