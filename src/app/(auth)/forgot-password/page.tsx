'use client'

import { useState } from 'react'
import { Form, Input, Button, Card, Typography, message, Steps } from 'antd'
import { MailOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const { Title, Text } = Typography

interface RequestResetFormValues {
	email: string
}

interface ResetPasswordFormValues {
	code: string
	newPassword: string
	confirmPassword: string
}

export default function ForgotPasswordPage() {
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(0)
	const [email, setEmail] = useState('')
	const [requestForm] = Form.useForm()
	const [resetForm] = Form.useForm()

	const handleRequestReset = async (values: RequestResetFormValues) => {
		try {
			// Здесь будет логика отправки кода на email
			setEmail(values.email)
			message.success('Код подтверждения отправлен на ваш email!')
			setCurrentStep(1)
		} catch (error) {
			message.error('Ошибка при отправке кода')
		}
	}

	const handleResetPassword = async (values: ResetPasswordFormValues) => {
		try {
			// Здесь будет логика сброса пароля
			message.success('Пароль успешно изменен!')
			router.push('/login')
		} catch (error) {
			message.error('Ошибка при сбросе пароля')
		}
	}

	const steps = [
		{
			title: 'Запрос',
			content: (
				<Form
					form={requestForm}
					name='requestReset'
					onFinish={handleRequestReset}
					layout='vertical'
				>
					<Form.Item
						name='email'
						rules={[
							{ required: true, message: 'Введите email' },
							{ type: 'email', message: 'Введите корректный email' },
						]}
					>
						<Input prefix={<MailOutlined />} placeholder='Email' size='large' />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' block size='large'>
							Отправить код
						</Button>
					</Form.Item>
				</Form>
			),
		},
		{
			title: 'Сброс',
			content: (
				<Form
					form={resetForm}
					name='resetPassword'
					onFinish={handleResetPassword}
					layout='vertical'
				>
					<Text>Код подтверждения отправлен на {email}</Text>

					<Form.Item
						name='code'
						rules={[
							{ required: true, message: 'Введите код подтверждения' },
							{ len: 6, message: 'Код должен содержать 6 символов' },
						]}
					>
						<Input
							prefix={<KeyOutlined />}
							placeholder='Код подтверждения'
							size='large'
						/>
					</Form.Item>

					<Form.Item
						name='newPassword'
						rules={[
							{ required: true, message: 'Введите новый пароль' },
							{ min: 6, message: 'Пароль должен быть не менее 6 символов' },
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							placeholder='Новый пароль'
							size='large'
						/>
					</Form.Item>

					<Form.Item
						name='confirmPassword'
						dependencies={['newPassword']}
						rules={[
							{ required: true, message: 'Подтвердите пароль' },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('newPassword') === value) {
										return Promise.resolve()
									}
									return Promise.reject(new Error('Пароли не совпадают'))
								},
							}),
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							placeholder='Подтвердите новый пароль'
							size='large'
						/>
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' block size='large'>
							Сбросить пароль
						</Button>
					</Form.Item>
				</Form>
			),
		},
	]

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
					Восстановление пароля
				</Title>

				<Steps
					current={currentStep}
					items={steps.map(item => ({ title: item.title }))}
					style={{ marginBottom: '30px' }}
				/>

				{steps[currentStep].content}

				<div style={{ textAlign: 'center', marginTop: '20px' }}>
					<Link href='/login'>Вернуться к входу</Link>
				</div>
			</Card>
		</div>
	)
}
