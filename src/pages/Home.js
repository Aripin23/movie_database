// Import Navbar, Hero, Movies, Footer Component
import Navbar from "../Component/Navbar/Navbar";
import Hero from "../Component/Hero/Hero";
import Movies from "../Component/Movies/Movies";
import Footer from "../Component/Footer/Footer";
import AddMovieForm from "../Component/MovieAdd/AddMovieForm";
/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Movies />
      <AddMovieForm />
      <Footer />
    </>
  );
}

export default Home;