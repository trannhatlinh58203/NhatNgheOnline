import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import CategoryList from '../../components/CategoryList';
import FeaturedProperties from '../../components/FeaturedProperties';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';

const Home = () => (
  <>
    <Header />
    <Hero />
    <CategoryList />
    <FeaturedProperties />
    <CallToAction />
    <Footer />
  </>
);

export default Home;
