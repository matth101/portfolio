import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Experience from '@/components/Experience'

// Index.js
export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Experience />
		</div>
	)
}
