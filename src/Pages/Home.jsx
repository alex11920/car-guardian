import About from "../Components/About";
import Banner from "../Components/Banner";
import ReminderBanner from "../Components/ReminderBanner";
import Services from "../Components/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <ReminderBanner></ReminderBanner>
    </div>
  );
};

export default Home;
