'use client'

import { useState } from 'react'
import { Tabs, Button, Input, Row, Col } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { TasksList } from '@/components/features/TasksList/TasksList'
import { CreateTaskModal } from '@/components/features/CreateTaskModal/CreateTaskModal'
import styles from './page.module.css'

const { Search } = Input

export default function TasksPage() {
	const [isModalVisible, setIsModalVisible] = useState(false)

	return (
		<div>
			<Row justify='space-between' align='middle' className={styles.pageHeader}>
				<Col>
					<h1 className={styles.pageTitle}>Задачи</h1>
				</Col>
				<Col>
					<Button
						type='primary'
						icon={<PlusOutlined />}
						onClick={() => setIsModalVisible(true)}
					>
						Новая задача
					</Button>
				</Col>
			</Row>

			<Row className={styles.searchRow}>
				<Col xs={24} sm={12} md={8}>
					<Search placeholder='Поиск задач...' />
				</Col>
			</Row>

			<Tabs
				items={[
					{
						key: 'all',
						label: 'Все задачи',
						children: <TasksList filter='all' />,
					},
					{
						key: 'active',
						label: 'Активные',
						children: <TasksList filter='active' />,
					},
					{
						key: 'completed',
						label: 'Завершенные',
						children: <TasksList filter='completed' />,
					},
				]}
			/>

			<CreateTaskModal
				visible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			/>
		</div>
	)
}
