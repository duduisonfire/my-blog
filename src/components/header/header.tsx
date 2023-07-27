'use client';

import React from 'react';
import { Navbar } from '../navbar/navbar';
import SmNavbar from '../navbar/sm-navbar';

export default function Header() {
	return (
		<div className="col-start-1 col-end-13">
			<Navbar />
			<SmNavbar />
		</div>
	);
}
