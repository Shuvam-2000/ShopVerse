import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import OurPolicies from "../components/OurPolicies";
import Testimonals from "../components/Testimonals";
import TopProducts from "../components/TopProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <OurPolicies/>
      <Testimonals/>
      <Newsletter />
    </div>
  );
};

export default Home;