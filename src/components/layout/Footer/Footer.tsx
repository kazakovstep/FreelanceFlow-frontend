'use client'

import { Layout } from 'antd'
import styles from './Footer.module.css'

const { Footer: AntFooter } = Layout

export const Footer = () => {
	return (
		<AntFooter className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.footerSection}>
					<h4>О сервисе</h4>
					<ul>
						<li>
							<a href='/about'>О нас</a>
						</li>
						<li>
							<a href='/contact'>Контакты</a>
						</li>
						<li>
							<a href='/blog'>Блог</a>
						</li>
					</ul>
				</div>

				<div className={styles.footerSection}>
					<h4>Поддержка</h4>
					<ul>
						<li>
							<a href='/help'>Центр помощи</a>
						</li>
						<li>
							<a href='/faq'>FAQ</a>
						</li>
						<li>
							<a href='/support'>Техподдержка</a>
						</li>
					</ul>
				</div>

				<div className={styles.footerSection}>
					<h4>Правовая информация</h4>
					<ul>
						<li>
							<a href='/terms'>Условия использования</a>
						</li>
						<li>
							<a href='/privacy'>Политика конфиденциальности</a>
						</li>
					</ul>
				</div>
			</div>

			<div className={styles.footerBottom}>
				<p>© 2024 Freelance Tracker. Все права защищены.</p>
			</div>
		</AntFooter>
	)
}
