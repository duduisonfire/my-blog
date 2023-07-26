import React, { useState } from 'react';
import ListItem from './components/list-item';
import { FaBars } from 'react-icons/fa6';

export default function SmNavbar() {
	const [isHidden, setIsHidden] = useState('hidden');
	const [buttonIsClicked, setButtonIsClicked] = useState('text-white');

	function menu() {
		if (isHidden === 'hidden') {
			setIsHidden('flex');
			setButtonIsClicked('text-purple-600');
		}
		if (isHidden === 'flex') {
			setIsHidden('hidden');
			setButtonIsClicked('text-white');
		}
	}

	return (
		<nav className="bg-black md:hidden">
			<div className="flex justify-end">
				<FaBars onClick={menu} className={`${buttonIsClicked} text-xl mx-10 my-4`} />
			</div>
			<div className={`${isHidden} flex-wrap justify-center`}>
				<ul className="text-white text-lg">
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
