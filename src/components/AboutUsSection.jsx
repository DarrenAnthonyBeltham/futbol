import React from 'react'
import AboutUsHeroSection from './AboutUsHeroSection'
import AboutUsFounder from '../components/AboutUsFounder'
import AboutUsPlayers from '../components/AboutUsPlayers'
import AboutUsCTA from '../components/AboutUsCTA'

const AboutUsSection = () => {
    return (
        <div className='min-h-screen'>
            <div className='container mx-auto px-6 py-16 sm:py-24'>
                <AboutUsHeroSection />
                <AboutUsFounder />
                <AboutUsPlayers />
                <AboutUsCTA />
            </div>
        </div>
    )
}

export default AboutUsSection
