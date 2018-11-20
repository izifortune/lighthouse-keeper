import React from 'react'
import drawChartScore from '../utils/chart-score'
import drawChartTimings from '../utils/chart-timings'
import drawChartBytes from '../utils/chart-bytes'
import { dragDrop } from '../utils/drag'
import {
  idleCallback,
  scriptAsync,
  show,
  hide,
  readFiles,
} from '../utils/utils'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleFiles = this.handleFiles.bind(this)
    this.siteDescription = props.data.site.siteMetadata.description
  }

  async handleFiles(files) {
    const read = await readFiles(files)
    idleCallback(() => {
      try {
        hide('#parseError')
        show('#charts')
        drawChartScore('chart_score', read)
        drawChartBytes('chart_bytes', read)
        drawChartTimings('chart_timings', read)
      } catch (e) {
        console.error(e)
        hide('#charts')
        show('#parseError')
      }
    })
  }

  componentDidMount() {
    scriptAsync('www.gstatic.com/charts/loader.js', () => {
      window.google.charts.load('current', { packages: ['corechart'] })
    })
    dragDrop('drop-area', this.handleFiles)
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <h2>Keep your website under budget</h2>

        <p className="description">{this.siteDescription}</p>

        <div id="drop-area">
          <form className="my-form">
            <p>Select/Drag multiple Lighthouse reports</p>
            <input
              type="file"
              id="fileElem"
              multiple
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

export default IndexPage

export const query = graphql`
  query SiteDescriptionQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
