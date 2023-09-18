import { RootAnimationLayout } from '@/app/layouts/RootAnimationLayout'
import './globals.scss'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NavigationEventsLayout from './layouts/NavigationEventsLayout'
import { Suspense } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Cozy Home',
	description: 'Cuộc sống tốt đẹp hơn với Cozy Home',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<main id="main" className="overflow-x-hidden"
				>
					<RootAnimationLayout >
						{children}
					</RootAnimationLayout>
				</main>
				<footer className='center mt-5 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs'>
					<p>Copyright © 2023 Cozy Home</p>
				</footer>
				<Suspense fallback={null}>
					<NavigationEventsLayout />
				</Suspense>
			</body>
		</html>
	)
}
