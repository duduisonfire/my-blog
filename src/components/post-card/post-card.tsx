import React from 'react';
import Image from 'next/image';
import IPostCardProps from './interfaces/IPostCardProps';

export default function PostCard(props: IPostCardProps) {
	return (
		<div className="max-w-sm rounded shadow-lg border border-black m-2">
			<Image
				width={400}
				height={400}
				className="w-full"
				src="https://www.temperim.com/blog/wp-content/uploads/2016/09/lorem-ipsum.jpg"
				alt="Sunset in the mountains"
			/>
			<div className="px-6 py-4">
				<div className="flex justify-between">
					<div className="font-bold text-xl mb-2">{props.post.title}</div>
					<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{props.post.date.getDate()}/{props.post.date.getMonth()}/{props.post.date.getFullYear()}
					</span>
				</div>
				<p className="text-gray-700 text-base">{props.post.description}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					{props.post.category}
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					{props.post.author}
				</span>
			</div>
		</div>
	);
}
