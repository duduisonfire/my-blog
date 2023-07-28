import React from 'react';
import Image from 'next/image';
import IPostCardProps from './interfaces/IPostCardProps';

export default function PostCard(props: IPostCardProps) {
	return (
		<div className="max-w-md rounded shadow-lg border border-black m-2">
			<Image width={400} height={400} className="w-full" src={props.post.postImage} alt={props.post.postDescription} />
			<div className="px-6 py-4">
				<div className="flex md:justify-between flex-wrap">
					<div className="font-bold lg:text-xl mb-2 text-sm">{props.post.postTitle}</div>
					<span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{props.post.createdAt.getDate()}/{props.post.createdAt.getMonth()}/{props.post.createdAt.getFullYear()}
					</span>
				</div>
				<p className="text-gray-700 text-base">{props.post.postDescription}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					{props.post.postCategory}
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					<a className="underline text-blue-600" href="https://github.com/duduisonfire">
						{props.post.postAuthor}
					</a>
				</span>
			</div>
		</div>
	);
}
