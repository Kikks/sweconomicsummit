import FAQs from '../components/pages/faqs/FAQs';
import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const FAQsPage = () => {
  return (
    <AppLayout
      meta={{
        title: `FAQs - ${appConfig.title}`,
      }}
    >
      <Hero title="FAQs" subtitle="Got questions? We've got answers." />
      <FAQs />
    </AppLayout>
  );
};

export default FAQsPage;
