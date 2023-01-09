import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC containers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-1.jpg'
                text='Explore the hidden waterfall deep inside the
                Amazon Jungle deep'
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src='images/img-2.jpg'
                text='Travel through the island of Balin in a private cruise'
                label='Luxury'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-3.jpg'
                text='Set sail in the Atlantic ocean visiting uncharted waters'
                label='Mystery'
                path='/services'
                />
                <CardItem 
                src='images/img-4.jpg'
                text='Experience football on the top of Himilayen Mountains'
                label='Adevnture'
                path='/services'
                />
                <CardItem 
                src='images/img-8.jpg'
                text='Ride through the Sahara waters on a guided Camel tour'
                label='Adrenaline'
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
