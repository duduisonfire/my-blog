import React from 'react';
import ListItem from './components/list-item';

export function Navbar() {
	return (
		<nav className="bg-black hidden md:flex flex-row justify-end">
			<div>
				<ul className="text-white text-lg flex m-4">
					<ListItem>
						<a href="">Home</a>
					</ListItem>
					<ListItem>
						<a href="">Projects</a>
					</ListItem>
					<ListItem>
						<a href="">About me</a>
					</ListItem>
				</ul>
			</div>
		</nav>
	);
}
