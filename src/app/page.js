import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Connect from '@/components/Connect'


// Index.js
export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Connect />
		</div>
	)
}
