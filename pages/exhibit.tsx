import React from 'react';

import ExhibitForm from '../components/pages/exhibit/ExhibitForm';
import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const Exhibit = () => {
  return (
    <AppLayout
      meta={{
        title: `Exhibit - ${appConfig.title}`,
      }}
    >
      <Hero
        title="Exhibit"
        subtitle="Do you have a product you would like to showcase?"
      />
      <ExhibitForm />
    </AppLayout>
  );
};

export default Exhibit;
