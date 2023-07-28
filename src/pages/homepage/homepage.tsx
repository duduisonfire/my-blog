'use client';

import React, { useEffect, useState } from 'react';
import PostCard from '@/components/post-card/post-card';
import IPost from '@/interfaces/IPost';
import { blogApi } from '@/utils/axios/axiosInstance';

export default function Homepage() {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [page] = useState(0);

	useEffect(() => {
		const getPages = async () => {
			const listOfPostsJSON = (await blogApi.get(`/api/posts/${page}`)).data as IPost[];

			const listOfPosts: IPost[] = listOfPostsJSON.map((post) => ({
				postTitle: post.postTitle,
				postDescription: post.postDescription,
				postCategory: post.postCategory,
				createdAt: new Date(post.createdAt),
				postAuthor: post.postAuthor,
				postImage: post.postImage,
				post: post.post,
			}));

			console.log(listOfPosts);

			setPosts(listOfPosts);
		};

		getPages();
	}, [page]);

	return (
		<div className="grid grid-cols-12 col-start-1 col-end-13">
			<div className="bg-white col-start-2 col-end-12 flex flex-wrap md:my-6">
				<div className="flex flex-wrap justify-center col-start-1 col-end-13 m-4">
					{posts.map((post) => (
						<PostCard key={post.postTitle} post={post} />
					))}
				</div>
			</div>
		</div>
	);
}
