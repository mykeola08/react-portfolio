import React from 'react';
import './Footer.css';

export default function Footer() {
    const current = new Date();
    const date = `${current.getFullYear()}`;
  return (
    <div className='copyright' >
        <span className='copyrightMessage'>
            Copyright &copy; <a href='https://mykeola.org'>{date} Michael Oladimeji</a> . All Rights reserved
        </span>
    </div>
  )
}
