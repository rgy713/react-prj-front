import Hero from "../templates/hero";
import InfoPage from "../templates/feature";
import Subscribe from "../templates/subscribe";
import Footer from "../templates/footer";

const HomePage = () => {
  return (
    <div>
      <div className="w-full block relative h-[auto]">
        <Hero />
      </div>
      <InfoPage />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
