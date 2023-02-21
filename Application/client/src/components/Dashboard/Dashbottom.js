import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Dashbottom() {
  return (
    <>
       

     <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
      

        src= 'https://source.unsplash.com/1600x900/?coding'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src= 'https://source.unsplash.com/1600x900/?galaxy'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://source.unsplash.com/1600x900/?Timetravel'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
   
    </>
    
  )
}

export default Dashbottom;
