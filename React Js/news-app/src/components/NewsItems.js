import PropTypes from 'prop-types'
import React, { Component } from 'react'


export class NewsItems extends Component {
  static propTypes = {}

  render() {
    let {title,description,imageURL,newsURL,author,time,source} = this.props;
    return (
      <div className="card" style={{border: "none"}} >
      <img src={imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
        <span className="badge rounded-pill bg-secondary">Source: {source}</span>
          <h5 className="card" style={{border: "none"}}>{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(time).toUTCString()}</small></p>
          <a href={newsURL} target="_blank" className="btn btn-primary">Read More</a>
        </div>
    </div>
     
    )
  }
}

export default NewsItems