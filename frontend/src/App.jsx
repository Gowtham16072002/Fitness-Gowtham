import "./App.css";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
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
import AdminServices from "./Pages/Admin/AdminServices";
import AdminTestimonials from "./Pages/Admin/AdminTestimonials";
import AdminSettings from "./Pages/Admin/AdminSettings";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SERVICE} element={<Services />} />
          <Route path={ROUTES.PROGRAMS} element={<Programs />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.BEGINNER_GYM} element={<BeginnerGym />} />
          <Route path={ROUTES.CARDIO} element={<Cardio />} />
          <Route path={ROUTES.STRENGTH_TRAINING} element={<StrengthTraining />} />
          <Route path={ROUTES.NUTRITION} element={<Nutrition />} />
          <Route path={ROUTES.BEGINNER_YOGA} element={<BeginnerYoga />} />
          <Route path={ROUTES.KARMA_YOGA} element={<KarmaYoga />} />
          <Route path={ROUTES.BHAKTI_YOGA} element={<Bhaktiyoga />} />
          <Route path={ROUTES.JNANA_YOGA} element={<Jnanayoga />} />
          <Route path={ROUTES.ZUMBA_FITNESS} element={<ZumbaFitness />} />
          <Route path={ROUTES.ZUMBA_GOLD} element={<ZumbaGold />} />
          <Route path={ROUTES.ZUMBA_CLASSIC} element={<ZumbaClassic />} />
          <Route path={ROUTES.PRICING_PLAN} element={<PricingPlans />} />
          <Route path={ROUTES.ZUMBA_KIDS} element={<ZumbaKids />} />
          <Route path={ROUTES.GENERAL_SPORTS} element={<GeneralSports />} />
          <Route path={ROUTES.TEAM_SPORTS} element={<TeamSports />} />
          <Route path={ROUTES.INDIVIDUAL_SPORTS} element={<IndividualSports />} />
          <Route path={ROUTES.ADVENTURE_SPORTS} element={<AdventureSports />} />
        </Route>

        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />

        <Route element={<AdminProtectedRoute />}>
          <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashBoard />} />
          <Route path={ROUTES.ADMIN_HOME} element={<AdminHomePage />} />
          <Route path={ROUTES.ADMIN_ABOUT} element={<AdminAboutPage />} />
          <Route path={ROUTES.ADMIN_TRAINERS} element={<AdminTrainers />} />
          <Route path={ROUTES.ADMIN_PROGRAMS} element={<AdminPrograms />} />
          <Route path={ROUTES.ADMIN_SERVICES} element={<AdminServices />} />
          <Route path={ROUTES.ADMIN_TESTIMONIALS} element={<AdminTestimonials />} />
          <Route path={ROUTES.ADMIN_SETTINGS} element={<AdminSettings />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;