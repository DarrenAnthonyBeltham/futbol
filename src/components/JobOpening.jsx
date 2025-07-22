import React from 'react'

const JobOpening = ({title, location, type}) => {
    return (
        <section>
            <div className='glass-card rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-brand-accent/50 transition-colors duration-300'>
                <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-brand-gray mt-1">{location} &middot; {type}</p>
                </div>
                <a href="#" className="bg-brand-surface text-white font-bold py-2 px-5 rounded-full text-sm hover:bg-brand-accent hover:text-brand-dark transition-colors duration-300 flex-shrink-0">Apply Now</a>
            </div>
        </section>
    )
}

export default JobOpening
