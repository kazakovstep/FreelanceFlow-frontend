// components/layout/MainLayout/MainLayout.tsx
'use client'

import { useState } from 'react'
import { Layout } from 'antd'
import { Header } from '@/components/layout/Header/Header'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
import { Footer } from '@/components/layout/Footer/Footer'
import styles from './MainLayout.module.css'

const { Content } = Layout

interface MainLayoutProps {
	children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const toggleSidebar = () => {
		setCollapsed(!collapsed)
	}

	return (
		<Layout className={styles.layout}>
			<Header toggleSidebar={toggleSidebar} />
			<Layout>
				<Sidebar collapsed={collapsed} />
				<Layout className={styles.mainContent}>
					<Content className={styles.content}>{children}</Content>
					<Footer />
				</Layout>
			</Layout>
		</Layout>
	)
}
