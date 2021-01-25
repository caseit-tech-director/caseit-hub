import React, {useEffect} from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage () {
  const tawkTo = require("tawkto-react");
  const tawkToPropertyId = '600f2303a9a34e36b9702f83'
  
  useEffect(() => {
      tawkTo(tawkToPropertyId)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  );
};
export default IndexPage
