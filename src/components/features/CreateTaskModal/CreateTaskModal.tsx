'use client'

import { Modal, Form, Input, Select, DatePicker, message } from 'antd'
import { useState } from 'react'
import styles from './CreateTaskModal.module.css'

interface CreateTaskModalProps {
	visible: boolean
	onClose: () => void
}

export const CreateTaskModal = ({ visible, onClose }: CreateTaskModalProps) => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)

	const handleSubmit = async () => {
		try {
			setLoading(true)
			const values = await form.validateFields()

			// Здесь будет логика создания задачи
			console.log('Form values:', values)

			message.success('Задача создана успешно!')
			form.resetFields()
			onClose()
		} catch (error) {
			message.error('Ошибка при создании задачи')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Modal
			title='Создать новую задачу'
			open={visible}
			onOk={handleSubmit}
			onCancel={onClose}
			confirmLoading={loading}
			okText='Создать'
			cancelText='Отмена'
		>
			<Form form={form} layout='vertical' className={styles.form}>
				<Form.Item
					name='title'
					label='Название задачи'
					rules={[{ required: true, message: 'Введите название задачи' }]}
				>
					<Input placeholder='Введите название задачи' />
				</Form.Item>

				<Form.Item
					name='project'
					label='Проект'
					rules={[{ required: true, message: 'Выберите проект' }]}
				>
					<Select placeholder='Выберите проект'>
						<Select.Option value='project1'>Проект 1</Select.Option>
						<Select.Option value='project2'>Проект 2</Select.Option>
						{/* Добавьте больше проектов */}
					</Select>
				</Form.Item>

				<Form.Item name='description' label='Описание'>
					<Input.TextArea rows={4} placeholder='Описание задачи' />
				</Form.Item>

				<Form.Item
					name='priority'
					label='Приоритет'
					rules={[{ required: true, message: 'Выберите приоритет' }]}
				>
					<Select placeholder='Выберите приоритет'>
						<Select.Option value='high'>Высокий</Select.Option>
						<Select.Option value='medium'>Средний</Select.Option>
						<Select.Option value='low'>Низкий</Select.Option>
					</Select>
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
