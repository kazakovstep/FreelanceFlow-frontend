'use client'

import { Tabs, DatePicker, Row, Col, Card } from 'antd'
import { TimeTracker } from '@/components/features/TimeTracker/TimeTracker'
import { TimeReports } from '@/components/features/TimeReports/TimeReports'
import styles from './page.module.css'

const { RangePicker } = DatePicker

export default function TimeTrackingPage() {
	return (
		<div>
			<h1 className={styles.pageTitle}>Учет времени</h1>

			<Tabs
				items={[
					{
						key: 'tracker',
						label: 'Таймер',
						children: <TimeTracker />,
					},
					{
						key: 'reports',
						label: 'Отчеты',
						children: (
							<div>
								<Row className={styles.reportHeader}>
									<Col>
										<RangePicker />
									</Col>
								</Row>
								<TimeReports />
							</div>
						),
					},
				]}
			/>
		</div>
	)
}
