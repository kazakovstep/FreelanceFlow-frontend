'use client'

import { Line } from '@ant-design/charts'

export const DashboardChart = () => {
	const data = [
		{ date: '2024-01', hours: 30 },
		{ date: '2024-02', hours: 45 },
		{ date: '2024-03', hours: 38 },
		// ... добавьте больше данных
	]

	const config = {
		data,
		xField: 'date',
		yField: 'hours',
		point: {
			size: 5,
			shape: 'diamond',
		},
		label: {
			style: {
				fill: '#aaa',
			},
		},
	}

	return <Line {...config} />
}
