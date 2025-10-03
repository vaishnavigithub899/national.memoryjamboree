// src/App.jsx
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import { Navbar } from './components/Navbar.jsx';
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
import Register from "./components/Register.jsx";
import Payments from "./components/Payments.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Category />
                <Discipline />
                <StorySection />
                <Benefits />
                <Portfolio />
                <Team />
                <Achievements />
                <Sponsors />
                <Connect_with_us />
                <FAQ />
              </>
            }
          />

          {/* Individual Pages */}
          <Route path="/categories" element={<Category />} />
          <Route path="/disciplines" element={<Discipline />} />
          <Route path="/connect-us" element={<Connect_with_us />} />

          {/* Register / Payments Pages */}
          <Route path="/register" element={<Register />} />
          <Route path="/payments" element={<Payments />} />

          {/* Optional 404 */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-20 text-4xl font-bold">
                404 Page Not Found
              </h1>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
