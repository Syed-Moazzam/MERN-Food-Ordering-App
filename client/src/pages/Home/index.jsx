import React, { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay';
import AppDownload from '../../components/AppDownload';
import HeroSection from '../../components/HeroSection';
import homeScreenImage from '../../assets/header_img.png';
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <HeroSection image={homeScreenImage} mainHeading={'Order your favourite food here'} content={'Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.'} className={'hero-section-of-home-screen'} />
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} />
      <AppDownload />
    </>
  )
}

export default Home;