import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
    {
        quote: "This is hands-down the best formation builder I've ever used. The interface is clean, fast, and incredibly powerful. It's completely changed how I plan my team's tactics.",
        name: "Jürgen Klopp",
        title: "Manager, Liverpool F.C.",
        avatar: "https://placehold.co/48x48/F5F5F5/111111?text=JK"
    },
    {
        quote: "The ability to visualize player movements and tactical shifts in real-time is a game-changer. Futbol is an essential tool for any serious analyst.",
        name: "Pep Guardiola",
        title: "Manager, Manchester City",
        avatar: "https://placehold.co/48x48/F5F5F5/111111?text=PG"
    },
    {
        quote: "Finally, a tool that understands the modern game. The player card generator is fantastic for our social media engagement. Highly recommended!",
        name: "Hansi Flick",
        title: "Manager, FC Barcelona",
        avatar: "https://placehold.co/48x48/F5F5F5/111111?text=HF"
    },
    {
        quote: "As a player, seeing the tactics laid out this clearly helps in understanding my role on the pitch. It's brilliant for team meetings.",
        name: "Lionel Messi",
        title: "Player, Inter Miami CF",
        avatar: "https://placehold.co/48x48/F5F5F5/111111?text=LM"
    },
    {
        quote: "Futbol bridges the gap between complex data and intuitive visualization. It's become an indispensable part of my pre-match preparation.",
        name: "Carlo Ancelotti",
        title: "Manager, Real Madrid",
        avatar: "https://placehold.co/48x48/F5F5F5/111111?text=CA"
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                ),
            5000 
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join <span className="text-brand-accent">50,000+</span> Tacticians</h2>
                <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-12">From casual fans to professional analysts, Futbol is the go-to tool for visualizing the beautiful game.</p>
                <div className="relative w-full max-w-4xl mx-auto glass-card rounded-xl p-8 overflow-hidden">
                    <div className="aurora-glow w-80 h-80 bg-brand-accent/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
                    
                    <div className="relative overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div className="w-full flex-shrink-0 px-4" key={index}>
                                    <div className="max-w-3xl mx-auto">
                                        <p className="text-xl md:text-2xl italic font-medium leading-relaxed mb-8 break-words">"{testimonial.quote}"</p>
                                        <div className="flex items-center justify-center">
                                            <img src={testimonial.avatar} alt="User avatar" className="rounded-full flex-shrink-0" />
                                            <div className="ml-4 text-left">
                                                <p className="font-bold">{testimonial.name}</p>
                                                <p className="text-sm text-brand-gray">{testimonial.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center space-x-2 mt-4">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-accent' : 'bg-white/30'}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;