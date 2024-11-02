import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import OurPolicies from "../components/OurPolicies";
import TopProducts from "../components/TopProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <OurPolicies/>
      <Newsletter />
    </div>
  );
};

export default Home;