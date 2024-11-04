'use client'

import { Layout, Menu, Button, Avatar, Dropdown } from 'antd'
import { UserOutlined, BellOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Link from 'next/link'
import styles from './Header.module.css'

const { Header: AntHeader } = Layout

interface HeaderProps {
	toggleSidebar: () => void
}

export const Header = ({ toggleSidebar }: HeaderProps) => {
	const userMenuItems = [
		{
			key: 'profile',
			label: <Link href='/profile'>Профиль</Link>,
		},
		{
			key: 'settings',
			label: <Link href='/settings'>Настройки</Link>,
		},
		{
			key: 'logout',
			label: 'Выйти',
		},
	]

	return (
		<AntHeader className={styles.header}>
			<div className={styles.headerLeft}>
				<Button
					type='text'
					icon={<MenuFoldOutlined />}
					onClick={toggleSidebar}
					className={styles.triggerButton}
				/>
				<Link href='/' className={styles.logo}>
					Freelance Tracker
				</Link>
			</div>

			<div className={styles.headerRight}>
				<Button type='text' icon={<BellOutlined />} />
				<Dropdown menu={{ items: userMenuItems }} placement='bottomRight'>
					<Avatar icon={<UserOutlined />} />
				</Dropdown>
			</div>
		</AntHeader>
	)
}
