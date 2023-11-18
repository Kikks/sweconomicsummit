import SpeakersAndPanelists from '../components/pages/speakers/SpeakersAndPanelists';
import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const SpeakersPage = () => {
  return (
    <AppLayout
      meta={{
        title: `Speakers - ${appConfig.title}`,
      }}
    >
      <Hero title="Speakers" subtitle="Get inspired by our amazing speakers." />
      <SpeakersAndPanelists />
    </AppLayout>
  );
};

export default SpeakersPage;
