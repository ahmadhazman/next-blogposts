import ListItem from '@/app/components/ListItem'
import { getPostsMeta } from '@/lib/posts'
import Link from 'next/link'

export const revalidate = 86400
// revalidate means prefetch
// 0 value means on demand fetchcing -  page is always fetched by next
// if revalidate has value for example 60, every 60 seconds the page will fetch / revalidate new updated data

type Props = {
	params: {
		tag: string
	}
}

export async function generateStaticParams() {
	const posts = await getPostsMeta() //deduped! deduplicate!

	if (!posts) return []

	const tags = new Set(posts.map((post) => post.tags).flat())

	return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {
	return {
		title: `Posts about ${tag}`,
	}
}

export default async function TagPostList({ params: { tag } }: Props) {
	const posts = await getPostsMeta() //deduped!

	if (!posts)
		return <p className='mt-10 text-center'>Sorry, no posts available.</p>

	const tagPosts = posts.filter((post) => post.tags.includes(tag))

	if (!tagPosts.length) {
		return (
			<div className='text-center'>
				<p className='mt-10'>Sorry, no posts for that keyword.</p>
				<Link href='/'>Back to Home</Link>
			</div>
		)
	}

	return (
		<>
			<h2 className='text-3xl mt-4 mb-0'>Results for: #{tag}</h2>
			<section className='mt-6 mx-auto max-w-2xl'>
				<ul className='w-full list-none p-0'>
					{tagPosts.map((post) => (
						<ListItem key={post.id} post={post} />
					))}
				</ul>
			</section>
		</>
	)
}
