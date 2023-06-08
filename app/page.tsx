import MyProfilePic from './components/MyProfilePic'
import Posts from './components/Posts'

export const revalidate = 86400
// revalidate means prefetch
// 0 value means on demand fetchcing -  page is always fetched by next
// if revalidate has value for example 60, every 60 seconds the page will fetch / revalidate new updated data

export default function Home() {
	return (
		<div className='mx-auto'>
			<MyProfilePic />
			<p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
				Hello and Welcome 👋&nbsp;
				<span className='whitespace-nowrap'>
					I'm <span className='font-bold'>Hazman</span>.
				</span>
			</p>
			{/* @ts-expect-error Server Component */}
			<Posts />
		</div>
	)
}
