import React, { Component } from 'react'
import { Link } from "gatsby"

export default class TopPanel extends Component {

  render() {
    return(
      <>
        <img src="https://fitz-cms-images.s3.eu-west-2.amazonaws.com/fitztht.png" alt="Fitzwilliam Museum" width="150" />
        <h1 className="cover-heading" style={{fontSize: `4rem`}}>The Human Touch</h1>
        <p className="lead cover">Making Art | Leaving Traces</p>
        <p className="lead cover">This exhibition ran from the 18 May 2021 to 1 August 2021</p>
      </>
    )
  }

}
