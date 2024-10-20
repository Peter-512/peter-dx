import { dev } from '$app/environment';
import type { BlogPostMetadata } from '$lib/types/types';

export const prerender = true;

const url = dev ? 'http://localhost:5173' : 'https://peter-dx.vercel.app';

export async function GET({ fetch }) {
	const response = await fetch('api/blog');
	const posts: BlogPostMetadata[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom='http://www.w3.org/2005/Atom' version='2.0'>
			<channel>
				<title>Peter Buschenreiter's blog</title>
				<description>Just writing about things that excite me</description>
				<link>${url}</link>
				<atom:link href='${url}/rss.xml' rel='self' type='application/rss+xml'/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${url}/blog/${post.slug}</link>
							<guid isPermaLink='true'>${url}/blog/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
