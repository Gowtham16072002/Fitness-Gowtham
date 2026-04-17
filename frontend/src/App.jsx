import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Layout from "./Pages/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Programs from "./Pages/Programs";
import Contact from "./Pages/Contact";
import BeginnerGym from "./Pages/BeginnerGym";
import Cardio from "./Pages/Cardio";
import StrengthTraining from "./Pages/StrengthTraining";
import Nutrition from "./Pages/Nutrition";
import BeginnerYoga from "./Pages/BeginnerYoga";
import KarmaYoga from "./Pages/KarmaYoga";
import Bhaktiyoga from "./Pages/Bhaktiyoga";
import Jnanayoga from "./Pages/Jnanayoga";
import ZumbaFitness from "./Pages/ZumbaFitness";
import ZumbaGold from "./Pages/ZumbaGold";
import PricingPlans from "./Pages/PricingPlans";
import ZumbaClassic from "./Pages/ZumbaClassic";
import ZumbaKids from "./Pages/ZumbaKids";
import GeneralSports from "./Pages/GeneralSports";
import TeamSports from "./Pages/TeamSports";
import IndividualSports from "./Pages/IndividualSports";
import AdventureSports from "./Pages/AdventureSports";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import AdminProtectedRoute from "./Components/AdminProtectedRoute";

import AdminHomePage from "./Pages/Admin/AdminHomePage";
import AdminAboutPage from "./Pages/Admin/AdminAboutPage";
import AdminDashBoard from "./Pages/Admin/AdminDashBoard";
import AdminTrainers from "./Pages/Admin/AdminTrainers";
import AdminPrograms from "./Pages/Admin/AdminPrograms";
import AdminTestimonials from "./Pages/Admin/AdminTestimonials";
import AdminSettings from "./Pages/Admin/AdminSettings";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beginnerGym" element={<BeginnerGym />} />
            <Route path="/cardio" element={<Cardio />} />
            <Route path="/StrengthTraining" element={<StrengthTraining />} />
            <Route path="/Nutrition" element={<Nutrition />} />
            <Route path="/beginnerYoga" element={<BeginnerYoga />} />
            <Route path="/KarmaYoga" element={<KarmaYoga />} />
            <Route path="/Bhaktiyoga" element={<Bhaktiyoga />} />
            <Route path="/Jnanayoga" element={<Jnanayoga />} />
            <Route path="/zumbaFitness" element={<ZumbaFitness />} />
            <Route path="/zumbaGold" element={<ZumbaGold />} />
            <Route path="/zumbaClassic" element={<ZumbaClassic />} />
            <Route path="/pricingplan/:name" element={<PricingPlans />} />
            <Route path="/zumbaKids" element={<ZumbaKids />} />
            <Route path="/generalSports" element={<GeneralSports />} />
            <Route path="/teamSports" element={<TeamSports />} />
            <Route path="/individualSports" element={<IndividualSports />} />
            <Route path="/adventureSports" element={<AdventureSports />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route path="/admin/home" element={<AdminHomePage />} />
          <Route path="/admin/about" element={<AdminAboutPage />} />
          <Route path="/admin/trainers" element={<AdminTrainers />} />
          <Route path="/admin/programs" element={<AdminPrograms />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;