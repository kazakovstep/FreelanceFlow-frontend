'use client'

import { Layout, Menu } from 'antd'
import {
	DashboardOutlined,
	ProjectOutlined,
	ClockCircleOutlined,
	CheckSquareOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'

const { Sider } = Layout

interface SidebarProps {
	collapsed: boolean
}

export const Sidebar = ({ collapsed }: SidebarProps) => {
	const pathname = usePathname()

	const menuItems = [
		{
			key: '/',
			icon: <DashboardOutlined />,
			label: <Link href='/'>Дашборд</Link>,
		},
		{
			key: '/projects',
			icon: <ProjectOutlined />,
			label: <Link href='/projects'>Проекты</Link>,
		},
		{
			key: '/tasks',
			icon: <CheckSquareOutlined />,
			label: <Link href='/tasks'>Задачи</Link>,
		},
		{
			key: '/time-tracking',
			icon: <ClockCircleOutlined />,
			label: <Link href='/time-tracking'>Учет времени</Link>,
		},
	]

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			className={styles.sidebar}
		>
			<Menu
				mode='inline'
				selectedKeys={[pathname]}
				items={menuItems}
				className={styles.menu}
			/>
		</Sider>
	)
}
