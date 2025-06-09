// src/pages/Home.jsx
import HeroSlider from '../components/HeroSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryScroller from '../components/CategoryScroller';
import FeaturedProductSection from '../components/FeaturedProductSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
       <div className="bg-gradient-to-br from-orange-500 via-red-50 to-orange-50 min-h-screen">
      <Navbar />
      <div className="pt-12">
        <HeroSlider />
        <FeaturedProducts />
        {/* <CategoryScroller />
        <FeaturedProductSection /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
