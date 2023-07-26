'use client';

import React from 'react';
import { Navbar } from '../navbar/navbar';
import SmNavbar from '../navbar/sm-navbar';

export default function Header() {
	return (
		<div>
			<Navbar />
			<SmNavbar />
		</div>
	);
}
