import React from 'react';
import FormTabs from './components/FormTabs';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ color: 'white' }}>
        <p>APP&apos;s LOGO</p>
      </Header>
      <FormTabs />
    </Layout>
  );
}

export default App;
