import * as React from 'react';
import Layout from '../components/Layout';
import Box from '../components/Box';
import Title from '../components/Title';

export default function About() {
  return (
    <Layout>
      <Box>
        <Title as="h2" size="large">
          About
        </Title>
      </Box>
    </Layout>
  );
}
