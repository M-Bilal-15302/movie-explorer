import { useState, useRef, useEffect } from "react"
import MovieList from "../Components/MovieList"

function Home() {
	const [movies, setMovies] = useState([])
	const inputRef = useRef()

	const FetchMovie = async (query) => {
		const response = await fetch(` http://www.omdbapi.com/?apikey=f007fe00&s=${query}`)
		const data = await response.json()
		console.log(data)
		setMovies(data.Search || [])
	}
	useEffect(() =>{
		FetchMovie("sultan")
		console.log("call")
	},[])

	const handleSearch = (e) => {
		e.preventDefault()
		const query = inputRef.current.value.trim()
		if (query) FetchMovie(query)
	}

  return (
    <div className="home">
		<form onSubmit={handleSearch}>
			<input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
			<button type="submit">Search 🔎</button>
		</form>
		<MovieList movies = {movies} />
	</div>
  )
}

export default Home