import React from 'react'
import { Link, withPrefix } from 'gatsby'

const Header = ({ siteTitle, location }) => {
  let isHomepage = true
  // if (typeof window !== `undefined`) {
  //   isHomepage = location.pathname === '/lighthouse-keeper/'
  // }
  return (
    <div>
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: '#ff6f43',
              textDecoration: 'none',
            }}
          >
            {siteTitle} {isHomepage ? 'v4' : 'v2'}
          </Link>
        </h1>
        {isHomepage ? (
          <Link to="/v2" style={{ display: 'none', color: 'white' }}>
            v2
          </Link>
        ) : (
          <Link to="/v3" style={{ color: 'white' }}>
            v3
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
