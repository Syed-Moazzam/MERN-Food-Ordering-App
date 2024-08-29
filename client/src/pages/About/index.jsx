import React from 'react';
import './About.css';
import HeroSection from '../../components/HeroSection';
import { assets } from '../../assets/assets';


const About = () => {
    return (
        <>
            <section className='hero-section-of-about-screen'>
                <HeroSection image={assets?.header_img} mainHeading={'About us'} content={"At Tomato, our mission is to redefine healthy eating with meals that are as delightful as they are nutritious. We believe that good food is the foundation of a vibrant life, and that's why we focus on using fresh, high-quality ingredients to craft dishes that satisfy your taste buds and fuel your body. Whether you're looking to maintain a balanced diet or simply enjoy the comfort of wholesome meals, Tomato is here to provide you with flavorful, mindful options that make every meal a moment of joy. Join us in our journey to make healthy eating accessible, enjoyable, and sustainable for everyone."} className={'hero-section-content-of-about-screen'} />
            </section>

            <section className='content-of-about-screen'>
                <h2 className='our-story-heading-of-about'>Our Story</h2>
                <p>Tomato began with a simple yet profound idea: to revolutionize how people enjoy food by seamlessly blending convenience with quality. Our founders, both tech enthusiasts and passionate food lovers, recognized a growing need for a platform that could connect busy individuals with the best local restaurants, without sacrificing the authenticity and taste of their meals. With this vision, Tomato was born, designed to be more than just another food delivery service. We aimed to create a platform where users could discover and indulge in a wide variety of cuisines, carefully curated from top local eateries. Whether you’re seeking comfort food on a busy day, a gourmet experience for a special occasion, or something in between, Tomato ensures that every meal is not only satisfying but also a true reflection of the rich culinary heritage within your community.</p>

                <p>At the core of Tomato are our three guiding principles: quality, variety, and community. We believe that great food should be accessible to all, which is why we partner with local restaurants that share our commitment to excellence. Our team rigorously selects each restaurant, ensuring they meet our high standards for taste, freshness, and service. This guarantees that every meal you order through Tomato is a delightful experience, backed by our promise of quality. We also understand that food is deeply personal, which is why we offer an extensive range of cuisines, catering to every palate and dietary preference. From comforting classics to adventurous new dishes, Tomato’s diverse menu is designed to satisfy any craving, making it easy to explore new flavors or indulge in familiar favorites with just a few taps.</p>

                <p>What truly distinguishes Tomato is our dedication to supporting and uplifting local communities. We recognize that local restaurants are the soul of any neighborhood, and by partnering with them, we contribute to the vibrancy and sustainability of the local economy. When you choose Tomato, you’re not just ordering a meal; you’re helping to preserve the unique flavors and traditions that make your community special. Each order supports the chefs, restaurant owners, and staff who pour their passion into creating the dishes you love. As we continue to grow, our focus remains on innovation and enhancing the user experience, ensuring that Tomato remains your trusted companion for all your food needs. Whether through new features, expanded restaurant partnerships, or exclusive offers, we are committed to making every dining experience with Tomato exceptional. Join us on this journey and let Tomato be your go-to app for discovering, enjoying, and supporting the best your community has to offer.</p>
            </section>
        </>
    )
}

export default About;