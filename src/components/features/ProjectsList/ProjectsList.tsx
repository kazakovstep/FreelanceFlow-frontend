'use client'

import { List, Card, Tag, Progress, Avatar } from 'antd'
import { ProjectOutlined } from '@ant-design/icons'
import styles from './ProjectsList.module.css'

export const ProjectsList = () => {
	const projects = [
		{
			id: 1,
			title: 'Веб-приложение',
			description: 'Разработка фриланс-платформы',
			progress: 75,
			status: 'active',
			deadline: '2024-04-01',
		},
	]

	return (
		<List
			grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
			dataSource={projects}
			renderItem={project => (
				<List.Item>
					<Card
						className={styles.projectCard}
						actions={[
							<span key='edit'>Редактировать</span>,
							<span key='tasks'>Задачи</span>,
						]}
					>
						<Card.Meta
							avatar={<Avatar icon={<ProjectOutlined />} />}
							title={project.title}
							description={project.description}
						/>
						<div className={styles.projectInfo}>
							<Progress percent={project.progress} />
							<Tag color={project.status === 'active' ? 'green' : 'orange'}>
								{project.status === 'active' ? 'Активный' : 'На паузе'}
							</Tag>
						</div>
					</Card>
				</List.Item>
			)}
		/>
	)
}
