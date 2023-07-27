'use client';

import Header from '@/components/header/header';
import Homepage from '@/pages/homepage/homepage';

export default function Home() {
	return (
		<div className="grid grid-cols-12">
			<Header />
			<Homepage />
		</div>
	);
}
