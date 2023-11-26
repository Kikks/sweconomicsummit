import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const AboutPage = () => {
  return (
    <AppLayout
      meta={{
        title: `About us - ${appConfig.title}`,
      }}
    >
      <Hero
        title="About us"
        text={
          <>
            <span>
              Hosted by Nigerian NewsDirect, the South-West Economic Summit
              brings together stakeholders including top government officials,
              financial institutions, economists and thought leaders to discuss
              the most pressing challenges in policies, regulations,
              infrastructure development, and how the South-West can leverage
              its rich human and material resources to drive the region&apos;s
              economic growth.
            </span>

            <span>
              It is the biggest gathering yet of South-West Governments and
              private sector players providing a platform to foster
              partnerships, adumbrate on strategies and innovation to drive the
              economy of the South-West.
            </span>

            <span>
              SWES 2024 hosts an exhibition of international and indigenous
              sector products and services - economic operators, national and
              international companies and potential investors, all coming
              together to present new technologies and bridge deficits in the
              economy.
            </span>

            <span>
              With numerous speeches, high level networking, dinner and plenary
              sessions throughout the summit, there is something for everyone in
              the value chain.
            </span>
          </>
        }
      />
    </AppLayout>
  );
};

export default AboutPage;
