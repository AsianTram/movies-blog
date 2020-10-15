import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <strong>@MadebyTramNguyen</strong>
      <div className="footer__links">
        <p>Connect me:</p>
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-google"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>
      </div>
    </footer>
  )
}

export default Footer
