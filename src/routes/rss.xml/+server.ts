import type { BlogPost } from '$lib/types/types';

export async function GET({ fetch }) {
	const response = await fetch('api/posts');
	const posts: BlogPost[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom='http://www.w3.org/2005/Atom' version='2.0'>
			<channel>
				<title>Peter Buschenreiter's blog</title>
				<description>Just writing about things that excite me</description>
				<link>https://peter-dx.vercel.app/</link>
				<atom:link href='https://peter-dx.vercel.app//rss.xml' rel='self' type='application/rss+xml'/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>https://peter-dx.vercel.app}/${post.slug}</link>
							<guid isPermaLink='true'>https://peter-dx.vercel.app/${post.slug}</guid>
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
