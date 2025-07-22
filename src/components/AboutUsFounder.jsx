import React from 'react'
import founder from '../asset/FounderFutbol.jpg'

const AboutUsFounder = () => {
    return (
        <section className='py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center'>
            <div className='relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-brand-surface'>
                <img src={founder} alt="Founder's Picture" className='w-full h-full object-cover' />
            </div>

            <div className='text-center md:text-left'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>My Story</h2>
                <div className='text-brand-gray text-lg leading-relaxed space-y-4'>
                    <p>Futbol was born from a simple idea scribbled on a napkin during a heated Champions League debate: "What if there was a tool as beautiful as the game itself?" I was tired of clunky, outdated tactics boards and wanted something intuitive, powerful, and fun to use.</p>
                    <p>As a solo creator, I've poured my passion for both football and technology into every line of code and every design choice. My mission is to empower every fan, coach, and analyst to bring their tactical ideas to life.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUsFounder
