'use client'

import { Row, Col, Card, Statistic } from 'antd'
import {
	DollarOutlined,
	ClockCircleOutlined,
	ProjectOutlined,
	CheckCircleOutlined,
} from '@ant-design/icons'
import { DashboardChart } from '@/components/features/DashboardChart/DashboardChart'
import { RecentTasks } from '@/components/features/RecentTasks/RecentTasks'
import { ActiveProjects } from '@/components/features/ActiveProjects/ActiveProjects'
import styles from './page.module.css'

export default function DashboardPage() {
	return (
		<div>
			<h1 className={styles.pageTitle}>Дашборд</h1>

			<Row gutter={[16, 16]}>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic
							title='Активные проекты'
							value={5}
							prefix={<ProjectOutlined />}
						/>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic
							title='Заработано в этом месяце'
							value={1234}
							prefix={<DollarOutlined />}
							suffix='₽'
						/>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic
							title='Часов отработано'
							value={45}
							prefix={<ClockCircleOutlined />}
						/>
					</Card>
				</Col>
				<Col xs={24} sm={12} lg={6}>
					<Card>
						<Statistic
							title='Выполнено задач'
							value={12}
							prefix={<CheckCircleOutlined />}
						/>
					</Card>
				</Col>
			</Row>

			<Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
				<Col xs={24} lg={16}>
					<Card title='Статистика времени'>
						<DashboardChart />
					</Card>
				</Col>
				<Col xs={24} lg={8}>
					<Card title='Последние задачи' style={{ marginBottom: '16px' }}>
						<RecentTasks />
					</Card>
					<Card title='Активные проекты'>
						<ActiveProjects />
					</Card>
				</Col>
			</Row>
		</div>
	)
}
