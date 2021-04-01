import * as React from 'react';
import Box from '../components/Box';
import Title from '../components/Title';
import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <Box>
        <Title as="h2" size="large">
          Gatsby Clean Starter
        </Title>
      </Box>
    </Layout>
  );
}
