'use client'

import { Card, Tabs, Form, Switch, Select, Button, Input } from 'antd'
import styles from './page.module.css'

export default function SettingsPage() {
	return (
		<div className={styles.settingsPage}>
			<h1 className={styles.pageTitle}>Настройки</h1>

			<Card>
				<Tabs
					items={[
						{
							key: 'general',
							label: 'Общие',
							children: (
								<Form layout='vertical' className={styles.settingsForm}>
									<Form.Item label='Язык интерфейса' name='language'>
										<Select
											options={[
												{ value: 'ru', label: 'Русский' },
												{ value: 'en', label: 'English' },
											]}
										/>
									</Form.Item>

									<Form.Item label='Часовой пояс' name='timezone'>
										<Select
											options={[
												{ value: 'UTC+3', label: 'Москва (UTC+3)' },
												{ value: 'UTC+2', label: 'Киев (UTC+2)' },
											]}
										/>
									</Form.Item>

									<Form.Item label='Уведомления' name='notifications'>
										<Switch defaultChecked />
									</Form.Item>
								</Form>
							),
						},
						{
							key: 'security',
							label: 'Безопасность',
							children: (
								<Form layout='vertical' className={styles.settingsForm}>
									<Form.Item label='Текущий пароль' name='currentPassword'>
										<Input.Password />
									</Form.Item>

									<Form.Item label='Новый пароль' name='newPassword'>
										<Input.Password />
									</Form.Item>

									<Form.Item label='Подтвердите пароль' name='confirmPassword'>
										<Input.Password />
									</Form.Item>

									<Button type='primary'>Изменить пароль</Button>
								</Form>
							),
						},
					]}
				/>
			</Card>
		</div>
	)
}
