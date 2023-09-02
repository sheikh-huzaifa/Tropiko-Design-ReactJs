import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Herosection from './Page/landing page/herosection';
import Ourservices from './Page/landing page/ourservices';
import Freashfruit from './Page/landing page/freashfruit';
import Testimonial from './Page/landing page/testimonial';
import Forum from './Page/landing page/forum';
import Bottomsection from './Page/landing page/bottomsection';
import Footer from './Components/footer';
import "../src/style/style.css"

function App() {
  return (
    <>
    <header>
      <Header />
      <Herosection />
    </header>
    <Ourservices />
      <Freashfruit />
      <Testimonial />
      <Forum />
      <Bottomsection />
      <Footer />
    </>
  );
}

export default App;
