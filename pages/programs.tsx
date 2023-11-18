import Events from '../components/pages/programs/Events';
import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const ProgramPage = () => {
  return (
    <AppLayout
      meta={{
        title: `Programs - ${appConfig.title}`,
      }}
    >
      <Hero
        title="Programs"
        subtitle="Hold on to your helmets, you're in for a ride!"
      />
      <Events />
    </AppLayout>
  );
};

export default ProgramPage;
