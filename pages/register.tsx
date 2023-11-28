import RegisterForm from '../components/pages/resgister/RegisterForm';
import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const RegisterPage = () => {
  return (
    <AppLayout
      meta={{
        title: `Register - ${appConfig.title}`,
      }}
    >
      <Hero title="Register" subtitle="We can't wait to see you!" />
      <RegisterForm />
    </AppLayout>
  );
};

export default RegisterPage;
