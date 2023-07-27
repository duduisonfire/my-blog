'use client';

import React from 'react';
import PostCard from '@/components/post-card/post-card';
import IPost from '@/interfaces/IPost';

export default function Homepage() {
	const postList = [];
	const post: IPost = {
		title: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, \
            consectetur adipiscing elit. \
            Sed tellus tellus, imperdiet \
            blandit ex et, rhoncus facilisis \
            eros. Nam ligula sem, bibendum nec \
            euismod ut, ornare non ligula. \
            Maecenas quis magna eu enim eleifend \
            vestibulum. Aliquam erat volutpat. \
            Fusce dapibus metus non ligula \
            dapibus pellentesque. Nullam viverra \
            volutpat porta. Nulla vitae enim \
            maximus erat aliquet posuere a suscipit \
            orci. Maecenas sit amet interdum quam. \
            Aenean vel suscipit metus. Nam felis diam, maximus in mattis.',
		category: 'Test',
		date: new Date(),
		author: 'Igor Tiburcio Cavalcanti',
	};

	for (let index = 0; index < 4; index++) {
		postList.push(post);
	}
	console.log(postList);

	return (
		<div className="grid grid-cols-12 col-start-1 col-end-13">
			<div className="bg-white grid grid-cols-12 col-start-2 col-end-12 md:my-6">
				<div className="flex flex-wrap justify-center col-start-1 col-end-13 m-4">
					{postList.map((post) => (
						<PostCard key={post.title} post={post} />
					))}
				</div>
			</div>
		</div>
	);
}
