import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

const Homepage = ({ onNavigate }) => {
    return (
        <main className="overflow-hidden">
            <HeroSection onNavigate={onNavigate}></HeroSection>
            <FeatureSection  onNavigate={onNavigate}></FeatureSection>
        </main>
    );
};

export default Homepage;