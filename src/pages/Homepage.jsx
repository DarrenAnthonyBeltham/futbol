import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

const Homepage = () => {
    return (
        <main className="overflow-hidden">
            <HeroSection></HeroSection>
            <FeatureSection></FeatureSection>
        </main>
    );
};

export default Homepage;