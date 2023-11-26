import Reasons from '../components/pages/why-attend/Reasons';
import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const WhyAttendPage = () => {
  return (
    <AppLayout
      meta={{
        title: `Why Attend - ${appConfig.title}`,
      }}
    >
      <Hero
        title="Why Attend"
        subtitle="Join us for this transforming event ..."
      />
      <Reasons />
    </AppLayout>
  );
};

export default WhyAttendPage;
