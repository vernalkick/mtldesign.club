import React from 'react'
import Sponsors from './sponsors'
import ThumbsUp from '../assets/images/svg/thumbs-up.svg'
import Slack from '../assets/images/svg/slack.svg'
import Facebook from '../assets/images/svg/fb.svg'

const Footer = () => {
  const subject = encodeURIComponent("Hi! I'd like to join the MTL Design Club Slack")

  return (
    <footer className="footer">
      <h3 className="footer__title">Want to make sure you don’t miss the next one?</h3>
      <div className="footer-link-list">
        <a href="https://www.facebook.com/mtldesignclub/" className="footer-link-list__item external-link">
          <Facebook className="footer-link-list__icon" />
          <span>Like us on Facebook</span>
        </a>

        <a href="https://join.slack.com/t/montrealdesignclub/shared_invite/enQtNzI4OTQ2MzM5Njg2LTAzNjc5M2Q3NTg2ZDg1Y2ZhODJkZTE4YTgxZDkzZGI5M2ZmMGU1YzA1Yzg3NzViZjUzZDM3NDljMmI3ZWUyZDM" className="footer-link-list__item external-link">
          <Slack className="footer-link-list__icon" />
          <span>Join our Slack</span>
        </a>
      </div>
      <Sponsors />
      <ThumbsUp />
    </footer>
  )

}

export default Footer
