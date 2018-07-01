/* eslint-disable */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

class v2Page extends React.Component {
  constructor(props) {
    super(props)
    this.siteDescription = props.data.site.siteMetadata.description
  }

  componentDidMount() {
    // require('../../public/static/v2/app.js')
    this.handleFilesv2 = window.handleFiles
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <h2>Keep your website under budget</h2>

        <p className="description">
          This version of lighthouse keeper works only with audits created with
          lighthouse v2. If you created reports using v3 please use the
          following one{' '}
          <Link to="/" style={{ color: 'white' }}>
            {' '}
            lighthouse-keeper{' '}
          </Link>
        </p>
        <p className="description">{this.siteDescription}</p>

        <div id="drop-area">
          <form className="my-form">
            <p>Select/Drag multiple Lighthouse reports</p>
            <input
              type="file"
              id="fileElem"
              multiple
              accept=".json"
              onChange={e => this.handleFiles(e.target.files)}
            />
            <label className="button" htmlFor="fileElem">
              Select reports
            </label>
          </form>
        </div>

        <div id="charts">
          <div className="score hidden">
            <h2 className="score-title">Score</h2>
            <div id="chart_score" />
            <div id="legend" />
            <div className="flexy">
              <a id="score__download" className="button" download="score.png">
                Download
              </a>
            </div>
          </div>

          <div className="bytes hidden">
            <h2 className="chart-bytes">Bytes</h2>
            <div id="chart_bytes" />
            <div className="flexy">
              <a id="bytes__download" className="button" download="bytes.png">
                Download
              </a>
            </div>
          </div>

          <div className="timings hidden">
            <h2 className="chart-timings">Timings</h2>
            <div id="chart_timings" />
            <div className="flexy">
              <a
                id="timings__download"
                className="button"
                download="timings.png"
              >
                Download
              </a>
            </div>
          </div>
        </div>

        <div id="parseError" className="error hidden">
          Oops something wrong happened!!
        </div>
      </Layout>
    )
  }
}

export default v2Page

export const query = graphql`
  query Desc {
    site {
      siteMetadata {
        description
      }
    }
  }
`
