import { FacebookRounded, Twitter, Instagram, LinkedIn, GitHub, YouTube } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <div  id='Contact'>
      <h1>Contact</h1>
        <div className='cool'> 
          <Button variant='rounded' startIcon="" href='https://facebook.com/salami.michael.96'><FacebookRounded color='primary' fontSize='large' /></Button>
          <Button variant='rounded' startIcon="" href='https://instagram.com/mykeola08'><Instagram color='primary' fontSize='large' /></Button>            
          <Button variant='rounded' startIcon="" href='https://twitter/mykeola08'><Twitter color='primary' fontSize='large' /></Button>            
          <Button variant='rounded' startIcon="" href='https://linkedin.com/in/michael-oladimeji-mykeola-94a0911b0'><LinkedIn color='primary' fontSize='large' /></Button>
          <Button variant='rounded' startIcon="" href='https://github/mykeola08'><GitHub color='primary' fontSize='large' /></Button>
          <Button variant='rounded' startIcon="" href='https://github/mykeola08'><YouTube color='primary' fontSize='large' /></Button>
        </div>         
    </div>
  )
}
// className='contact component__space'