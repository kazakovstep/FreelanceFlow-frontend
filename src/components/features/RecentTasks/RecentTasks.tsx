'use client'

import { List, Tag, Typography } from 'antd'
import { CheckOutlined, ClockCircleOutlined } from '@ant-design/icons'
import styles from './RecentTasks.module.css'

const { Text } = Typography

export const RecentTasks = () => {
	const tasks = [
		{
			id: 1,
			title: 'Разработка дизайна',
			project: 'Веб-приложение',
			status: 'active',
			deadline: '2024-03-20',
		},
		// Добавьте больше задач
	]

	return (
		<List
			className={styles.tasksList}
			dataSource={tasks}
			renderItem={task => (
				<List.Item
					actions={[
						task.status === 'active' ? (
							<ClockCircleOutlined style={{ color: '#1890ff' }} />
						) : (
							<CheckOutlined style={{ color: '#52c41a' }} />
						),
					]}
				>
					<List.Item.Meta
						title={task.title}
						description={
							<>
								<Text type='secondary'>{task.project}</Text>
								<br />
								<Tag
									color={task.status === 'active' ? 'processing' : 'success'}
								>
									{task.status === 'active' ? 'В работе' : 'Завершено'}
								</Tag>
							</>
						}
					/>
				</List.Item>
			)}
		/>
	)
}
