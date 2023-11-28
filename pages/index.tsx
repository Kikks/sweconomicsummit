import Advertise from '../components/pages/home/Advertise';
import ConferenceSchedule from '../components/pages/home/ConferenceSchedule';
import Header from '../components/pages/home/Header';
import Partners from '../components/pages/home/Partners';
import Speakers from '../components/pages/home/Speakers';
import Welcome from '../components/pages/home/Welcome';
import WhyAttend from '../components/pages/home/WhyAttend';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <Header />
      <Welcome />
      <WhyAttend />
      <Speakers />
      <ConferenceSchedule />
      <Advertise />
      <Partners />
    </AppLayout>
  );
};

export default Home;
