'use client'

import { Table, Card, Row, Col, Statistic } from 'antd'
import { ClockCircleOutlined, DollarOutlined } from '@ant-design/icons'
import styles from './TimeReports.module.css'

export const TimeReports = () => {
	const columns = [
		{
			title: 'Дата',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'Проект',
			dataIndex: 'project',
			key: 'project',
		},
		{
			title: 'Задача',
			dataIndex: 'task',
			key: 'task',
		},
		{
			title: 'Время (часы)',
			dataIndex: 'hours',
			key: 'hours',
		},
		{
			title: 'Стоимость',
			dataIndex: 'cost',
			key: 'cost',
			render: (cost: number) => `${cost} ₽`,
		},
	]

	const data = [
		{
			key: '1',
			date: '2024-03-01',
			project: 'Веб-приложение',
			task: 'Разработка дизайна',
			hours: 4,
			cost: 4000,
		},
		// Добавьте больше данных
	]

	const totalHours = data.reduce((acc, curr) => acc + curr.hours, 0)
	const totalCost = data.reduce((acc, curr) => acc + curr.cost, 0)

	return (
		<div>
			<Row gutter={16} className={styles.statistics}>
				<Col span={12}>
					<Card>
						<Statistic
							title='Всего часов'
							value={totalHours}
							prefix={<ClockCircleOutlined />}
						/>
					</Card>
				</Col>
				<Col span={12}>
					<Card>
						<Statistic
							title='Общая сумма'
							value={totalCost}
							prefix={<DollarOutlined />}
							suffix='₽'
						/>
					</Card>
				</Col>
			</Row>

			<Table
				columns={columns}
				dataSource={data}
				className={styles.reportTable}
			/>
		</div>
	)
}
