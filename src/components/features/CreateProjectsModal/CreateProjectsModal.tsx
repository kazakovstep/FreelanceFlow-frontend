'use client'

import {
	Modal,
	Form,
	Input,
	DatePicker,
	Select,
	InputNumber,
	message,
} from 'antd'
import { useState } from 'react'
import styles from './CreateProjectModal.module.css'

interface CreateProjectModalProps {
	visible: boolean
	onClose: () => void
}

export const CreateProjectModal = ({
	visible,
	onClose,
}: CreateProjectModalProps) => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)

	const handleSubmit = async () => {
		try {
			setLoading(true)
			const values = await form.validateFields()
			console.log('Project values:', values)
			message.success('Проект успешно создан!')
			form.resetFields()
			onClose()
		} catch (error) {
			message.error('Ошибка при создании проекта')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Modal
			title='Создать новый проект'
			open={visible}
			onOk={handleSubmit}
			onCancel={onClose}
			confirmLoading={loading}
			okText='Создать'
			cancelText='Отмена'
		>
			<Form form={form} layout='vertical'>
				<Form.Item
					name='title'
					label='Название проекта'
					rules={[{ required: true, message: 'Введите название проекта' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item name='description' label='Описание'>
					<Input.TextArea rows={4} />
				</Form.Item>

				<Form.Item
					name='client'
					label='Клиент'
					rules={[{ required: true, message: 'Введите имя клиента' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name='rate'
					label='Часовая ставка (₽)'
					rules={[{ required: true, message: 'Укажите часовую ставку' }]}
				>
					<InputNumber style={{ width: '100%' }} />
				</Form.Item>

				<Form.Item
					name='deadline'
					label='Дедлайн'
					rules={[{ required: true, message: 'Выберите дедлайн' }]}
				>
					<DatePicker style={{ width: '100%' }} />
				</Form.Item>
			</Form>
		</Modal>
	)
}
