import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import TodoCard from '../components/TodoCard'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Demo todo app</h1>
    <p></p>
    <p>built with Gatsby.js</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <TodoCard title={"every butt"} summary={"has a hole"}/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
