export interface Post {
	content: string;
	meta: PostMeta;
}

export interface PostMeta {
	excerpt: string;
	slug: string;
	title: string;
	tags: string[];
	date: string;
	category: string;
	image?: string;
	author: {
		name: string;
		image: string;
	};
}


