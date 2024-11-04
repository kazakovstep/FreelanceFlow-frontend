'use client'

import { useState, useEffect } from 'react'
import { Card, Button, Select, Typography } from 'antd'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import styles from './TimeTracker.module.css'

const { Title } = Typography

export const TimeTracker = () => {
	const [isRunning, setIsRunning] = useState(false)
	const [time, setTime] = useState(0)
	const [selectedProject, setSelectedProject] = useState(null)
	const [selectedTask, setSelectedTask] = useState(null)

	useEffect(() => {
		let interval: NodeJS.Timeout
		if (isRunning) {
			interval = setInterval(() => {
				setTime(prevTime => prevTime + 1)
			}, 1000)
		}
		return () => clearInterval(interval)
	}, [isRunning])

	const formatTime = (seconds: number) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
		const secs = seconds % 60
		return `${hours.toString().padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
	}

	return (
		<Card className={styles.trackerCard}>
			<div className={styles.trackerControls}>
				<Select
					style={{ width: 200 }}
					placeholder='Выберите проект'
					onChange={setSelectedProject}
				/>
				<Select
					style={{ width: 200 }}
					placeholder='Выберите задачу'
					onChange={setSelectedTask}
				/>
			</div>

			<Title level={1} className={styles.timer}>
				{formatTime(time)}
			</Title>

			<Button
				type='primary'
				size='large'
				icon={isRunning ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
				onClick={() => setIsRunning(!isRunning)}
			>
				{isRunning ? 'Пауза' : 'Старт'}
			</Button>
		</Card>
	)
}
