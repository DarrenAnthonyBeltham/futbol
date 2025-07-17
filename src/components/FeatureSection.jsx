import React from "react";
import FormationBuilder from "./FormationBuilder";
import PlayerCardsHomepage from "./PlayerCardsHomepage";
import Testimonial from "./Testimonial";
import HomepageCTA from "./HomepageCTA";

const FeatureSection = () => {
    return (
        <main>
            <FormationBuilder />
            <PlayerCardsHomepage />
            <Testimonial />
            <HomepageCTA />
        </main>
    );
};

export default FeatureSection;