import Partners from '../components/pages/partners/Partners';
import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const PartnersPage = () => {
  return (
    <AppLayout
      meta={{
        title: `Partners - ${appConfig.title}`,
      }}
    >
      <Hero
        title="Partners"
        subtitle="Here's to the people who make it all possible."
      />
      <Partners />
    </AppLayout>
  );
};

export default PartnersPage;
