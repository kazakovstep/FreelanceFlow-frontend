'use client'

import { useState } from 'react'
import { Button, Input, Row, Col } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { ProjectsList } from '@/components/features/ProjectsList/ProjectsList'
import { CreateProjectModal } from '@/components/features/CreateProjectsModal/CreateProjectsModal'
import styles from './page.module.css'

const { Search } = Input

export default function ProjectsPage() {
	const [isModalVisible, setIsModalVisible] = useState(false)

	return (
		<div>
			<Row justify='space-between' align='middle' className={styles.pageHeader}>
				<Col>
					<h1 className={styles.pageTitle}>Проекты</h1>
				</Col>
				<Col>
					<Button
						type='primary'
						icon={<PlusOutlined />}
						onClick={() => setIsModalVisible(true)}
					>
						Новый проект
					</Button>
				</Col>
			</Row>

			<Row className={styles.searchRow}>
				<Col xs={24} sm={12} md={8}>
					<Search placeholder='Поиск проектов...' />
				</Col>
			</Row>

			<ProjectsList />

			<CreateProjectModal
				visible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			/>
		</div>
	)
}
