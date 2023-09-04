import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { GrYoutube } from 'react-icons/gr'

const Footer = () => {
    return (
        <div>

            <div className='footer'>
                <div className='text-center my-4'><span>Sticky Note</span></div>
                <div className='footer_socials_MainPage'>
                    <a href="https://www.linkedin.com/in/harsh-vardhan-jha-577841242/" target="_blank"><BsLinkedin /></a>
                    <a href="https://instagram.com/romanempire_aman?igshid=ZDdkNTZiNTM=" target="_blank"><FiInstagram /></a>
                    <a href="" target="_blank"><GrYoutube /></a>
                </div>
                <div className="line"></div>
                <div className='footerline'><hr />
                    <small>Copywrite @ H V Jha</small>
                </div>
            </div>

        </div>
    )
}

export default Footer
