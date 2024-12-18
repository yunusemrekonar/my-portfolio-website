import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <html lang="en" />
        <title>Yunus Emre Konar | Full Stack Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Yunus Emre Konar, a full stack developer specializing in web development, mobile apps, UI/UX design, and branding."
        />
        <meta name="author" content="Yunus Emre Konar" />
        <meta
          name="keywords"
          content="full stack developer, web development, mobile apps, UI/UX design, branding, portfolio"
        />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet>
      <MyNavbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
