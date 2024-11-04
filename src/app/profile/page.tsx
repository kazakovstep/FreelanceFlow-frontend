'use client'

import { Card, Row, Col, Form, Input, Button, Upload, Avatar } from 'antd'
import { UserOutlined, UploadOutlined } from '@ant-design/icons'
import styles from './page.module.css'

export default function ProfilePage() {
	return (
		<div className={styles.profilePage}>
			<h1 className={styles.pageTitle}>Личный кабинет</h1>

			<Row gutter={[24, 24]}>
				<Col xs={24} md={8}>
					<Card className={styles.avatarCard}>
						<div className={styles.avatarWrapper}>
							<Avatar size={120} icon={<UserOutlined />} />
							<Upload className={styles.uploadButton}>
								<Button icon={<UploadOutlined />}>Изменить фото</Button>
							</Upload>
						</div>
					</Card>
				</Col>

				<Col xs={24} md={16}>
					<Card title='Личные данные'>
						<Form layout='vertical'>
							<Form.Item label='Имя' name='firstName'>
								<Input placeholder='Введите имя' />
							</Form.Item>

							<Form.Item label='Фамилия' name='lastName'>
								<Input placeholder='Введите фамилию' />
							</Form.Item>

							<Form.Item label='Email' name='email'>
								<Input placeholder='Введите email' />
							</Form.Item>

							<Form.Item label='Телефон' name='phone'>
								<Input placeholder='Введите телефон' />
							</Form.Item>

							<Button type='primary'>Сохранить изменения</Button>
						</Form>
					</Card>
				</Col>
			</Row>
		</div>
	)
}
