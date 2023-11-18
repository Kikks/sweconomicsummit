import ConferenceSchedule from '../components/pages/home/ConferenceSchedule';
import Header from '../components/pages/home/Header';
import Partners from '../components/pages/home/Partners';
import Speakers from '../components/pages/home/Speakers';
import WhyAttend from '../components/pages/home/WhyAttend';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <Header />
      <WhyAttend />
      <ConferenceSchedule />
      <Speakers />
      <Partners />
    </AppLayout>
  );
};

export default Home;
