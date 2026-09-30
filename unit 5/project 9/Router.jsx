import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from './ThemeContext.jsx'
import './router.css'

function SimplePage({ title, description }) {
		const { theme } = useContext(ThemeContext)

		return (
			<section className={`route-page ${theme}`}>
				<h2>{title}</h2>
				<p>{description}</p>
			</section>
		)
}

function RouterExample() {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<BrowserRouter> 
			<div className="router-layout">
				<nav>
					<p className="router-label">Pages</p>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link> 
					<Link to="/contact">Contact</Link>
					<button className="theme-toggle" onClick={toggleTheme}>
						{theme === 'light' ? 'Dark mode' : 'Light mode'}
					</button>
				</nav>

				<div className={`router-content ${theme}`}>
					<Routes>
						<Route path="/" element={<SimplePage title="Home Page" description="Welcome to my React practice space." />} />
						<Route path="/about" element={<SimplePage title="About Page" description="I enjoy learning React and building thoughtful interfaces." />} />
						<Route path="/contact" element={<SimplePage title="Contact Page" description="Let us build something useful together." />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default RouterExample