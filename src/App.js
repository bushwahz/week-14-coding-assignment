// Import main CSS and components
import "./App.css";
import Navbar from "./components/nav/Navbar";
import ReviewForm from "./components/Review";
import MovieList from "./components/MovieList";
import Stars from "./components/Stars";

function App() {
  //create an array object for MovieList component
  const movies = [
    {
      id: 0,
      name: "Gremlins",
      poster: 'https://filmartgallery.com/cdn/shop/products/Gremlins-Vintage-Movie-Poster-Original-1-Sheet-27x41_920b2d2b-078e-4601-9dbb-6d9d6fcc50da_5000x.jpg?v=1669410077',
      synopsis: "A gadget salesman is looking for a special gift for his son and finds one at a store in Chinatown. The shopkeeper is reluctant to sell him the 'mogwai' but sells it to him with the warning to never expose him to bright light, water, or to feed him after midnight. All of this happens and the result is a gang of gremlins that decide to tear up the town on Christmas Eve.",
      rating: 86
    },

    {
      id: 1,
      name: "Apocalypse Now",
      poster: 'https://filmartgallery.com/cdn/shop/files/Apocalypse-Now-Vintage-Movie-Poster-Original-40x60_5000x.jpg?v=1695243953',
      synopsis: "In Vietnam in 1970, Captain Willard (Martin Sheen) takes a perilous and increasingly hallucinatory journey upriver to find and terminate Colonel Kurtz (Marlon Brando), a once-promising officer who has reportedly gone completely mad. In the company of a Navy patrol boat filled with street-smart kids, a surfing-obsessed Air Cavalry officer (Robert Duvall), and a crazed freelance photographer (Dennis Hopper), Willard travels further and further into the heart of darkness.",
      rating: 97
    },

    {
      id: 2,
      name: "About Schmidt",
      poster: 'https://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/MorePics/aboutschmidt.jpg',
      synopsis: "Warren Schmidt, a quiet ex-insurance actuary, is unhappily married to Helen and brooding over the forthcoming wedding of his daughter Jeannie to Randall Hertzel. When Helen suddenly dies and he finds love letters to her from his best friend, he is inspired to try and stop the wedding, but standing in his way is Randall's feisty mother, and slowly, he realises he must make the most of his remaining life.",
      rating: 85
    }
  ]

  // Render the components
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="top">
          <div className="example">
            {/* Render Movielist component */}
            <MovieList name="Gremlins" movies={movies} />
            <h1 id="reviews">Leave a Review</h1><br />
            <h3>Gremlins</h3>
            {/* Render Star rating component */}
            <Stars /><br /><br />
            {/* Render ReviewForm component */}
            <ReviewForm />
            <h3>Apocalypse Now</h3>
            <Stars /><br /><br />
            <ReviewForm />
            <h3>About Schmidt</h3>
            <Stars /><br /><br />
            <ReviewForm />
          </div>
        </section>
      </main>
    </div>
  );
}

// Export the App
export default App;
