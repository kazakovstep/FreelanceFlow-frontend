'use client'

import { List, Progress, Typography } from 'antd'
import Link from 'next/link'
import styles from './ActiveProjects.module.css'

const { Text } = Typography

export const ActiveProjects = () => {
	const projects = [
		{
			id: 1,
			title: 'Веб-приложение',
			progress: 75,
			tasksCompleted: 15,
			totalTasks: 20,
		},
		// Добавьте больше проектов
	]

	return (
		<List
			className={styles.projectsList}
			dataSource={projects}
			renderItem={project => (
				<List.Item>
					<List.Item.Meta
						title={
							<Link href={`/projects/${project.id}`}>{project.title}</Link>
						}
						description={
							<>
								<Progress percent={project.progress} size='small' />
								<Text type='secondary'>
									Задачи: {project.tasksCompleted}/{project.totalTasks}
								</Text>
							</>
						}
					/>
				</List.Item>
			)}
		/>
	)
}
