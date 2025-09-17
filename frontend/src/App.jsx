import './App.css'
import { Navbar } from './components/Navbar.jsx' 
import { Footer } from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import { Category } from './components/Category.jsx';
import { Discipline } from './components/Discipline.jsx';
import { StorySection } from './components/StorySection.jsx';
import { Benefits } from './components/Benefits.jsx';
import { FAQ } from './components/FAQ.jsx';
import { Connect_with_us } from './components/Connect_with_us.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { Team } from './components/Team.jsx';
import { Sponsors } from './components/Sponsors.jsx';
import { Achievements } from './components/Achievments.jsx';
import Payments from './components/Payments.jsx';

function App() {

  return (
    <div>
        <Navbar />
        <main className="pt-16">
         <Hero/>
         <Category />
         <Discipline />
         <StorySection />
         <Benefits />
         <Payments/>
         <Portfolio />
         <Team />
         <Achievements />
         <Sponsors />
         <Connect_with_us />
         <FAQ />
         </main>
         <Footer />
    </div>
  )
}

export default App
