import PropTypes from 'prop-types'
import React, { Component } from 'react'
import loading from "./loading.gif"
export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="text-center">
          <img className='my-5' src={loading} />
      </div>
    )
  }
}

export default Spinner