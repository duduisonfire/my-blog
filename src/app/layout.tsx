'use client';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>{"Dudu's Blog | Welcome to my portfolio, see all projects."}</title>
				<meta name="description" content="Welcome to my portfolio, see all projects." />
			</head>
			<body className={`${inter.className} bg-violet-700`}>{children}</body>
		</html>
	);
}
