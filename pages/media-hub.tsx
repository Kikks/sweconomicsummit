import React from 'react';

import MediaHubForm from '../components/pages/media-hub/MediaHubForm';
import Hero from '../components/shared/Hero';
import AppLayout from '../layouts/AppLayout';
import appConfig from '../utils/appConfig';

const MediaHub = () => {
  return (
    <AppLayout
      meta={{
        title: `Media Hub - ${appConfig.title}`,
      }}
    >
      <Hero title="Media Hub" subtitle="Register your interest." />
      <MediaHubForm />
    </AppLayout>
  );
};

export default MediaHub;
