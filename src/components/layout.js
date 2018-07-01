import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, data, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: 'Lighthouse, perfmatters, web performance',
            },
          ]}
        />
        <Header location={location} siteTitle={data.site.siteMetadata.title} />
        <a
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'block',
          }}
          href="https://github.com/izifortune/lighthouse-keeper"
        >
          <img
            style={{ border: 0 }}
            src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
          />
        </a>
        <div
          style={{
            flex: '1',
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <footer>
          <small>© Copyright 2018, Fabrizio Fortunato MIT</small>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
