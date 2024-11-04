'use client'

import { Table, Tag, Space, Button } from 'antd'
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'
import { useState } from 'react'
import styles from './TasksList.module.css'

interface Task {
	id: number
	title: string
	project: string
	priority: 'high' | 'medium' | 'low'
	status: 'active' | 'completed'
	deadline: string
}

interface TasksListProps {
	filter: 'all' | 'active' | 'completed'
}

export const TasksList = ({ filter }: TasksListProps) => {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: 1,
			title: 'Разработка дизайна',
			project: 'Веб-приложение',
			priority: 'high',
			status: 'active',
			deadline: '2024-03-20',
		},
		// Добавьте больше тестовых задач
	])

	const columns = [
		{
			title: 'Задача',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Проект',
			dataIndex: 'project',
			key: 'project',
		},
		{
			title: 'Приоритет',
			dataIndex: 'priority',
			key: 'priority',
			render: (priority: string) => (
				<Tag
					color={
						priority === 'high'
							? 'red'
							: priority === 'medium'
							? 'orange'
							: 'green'
					}
				>
					{priority === 'high'
						? 'Высокий'
						: priority === 'medium'
						? 'Средний'
						: 'Низкий'}
				</Tag>
			),
		},
		{
			title: 'Статус',
			dataIndex: 'status',
			key: 'status',
			render: (status: string) => (
				<Tag color={status === 'active' ? 'processing' : 'success'}>
					{status === 'active' ? 'В работе' : 'Завершено'}
				</Tag>
			),
		},
		{
			title: 'Дедлайн',
			dataIndex: 'deadline',
			key: 'deadline',
		},
		{
			title: 'Действия',
			key: 'actions',
			render: (_: any, record: Task) => (
				<Space>
					<Button
						type='text'
						icon={<EditOutlined />}
						onClick={() => handleEdit(record)}
					/>
					<Button
						type='text'
						icon={<CheckOutlined />}
						onClick={() => handleComplete(record)}
					/>
					<Button
						type='text'
						danger
						icon={<DeleteOutlined />}
						onClick={() => handleDelete(record)}
					/>
				</Space>
			),
		},
	]

	const handleEdit = (task: Task) => {
		// Добавьте логику редактирования
		console.log('Edit task:', task)
	}

	const handleComplete = (task: Task) => {
		// Добавьте логику завершения задачи
		console.log('Complete task:', task)
	}

	const handleDelete = (task: Task) => {
		// Добавьте логику удаления
		console.log('Delete task:', task)
	}

	const filteredTasks = tasks.filter(task => {
		if (filter === 'all') return true
		return task.status === filter
	})

	return (
		<Table
			columns={columns}
			dataSource={filteredTasks}
			rowKey='id'
			className={styles.tasksTable}
		/>
	)
}
