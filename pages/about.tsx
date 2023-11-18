import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const AboutPage = () => {
  return (
    <AppLayout
      meta={{
        title: `About - ${appConfig.title}`,
      }}
    >
      <Hero
        title="About"
        text={
          <>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ab expedita eos at quia placeat fugit temporibus autem atque quos?
            </span>

            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              unde dicta? Ex praesentium, pariatur quam repellendus dolore
              expedita veritatis non esse optio ea ullam deserunt corporis enim
              cupiditate magnam tempore culpa inventore quis quia laboriosam
              perferendis dolor suscipit! Aliquid, repudiandae?
            </span>

            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              tenetur delectus? Rem eius molestiae, dolorem magni exercitationem
              alias neque rerum libero veniam fuga quia consequuntur saepe
              numquam dolore tempore illo.
            </span>
          </>
        }
      />
    </AppLayout>
  );
};

export default AboutPage;
