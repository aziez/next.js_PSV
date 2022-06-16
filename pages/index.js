import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'
import PanoImage from './component/PanoImage';
import { Main } from 'next/document';



class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      img: './images/360.jpg',
      caption: "test Panorama with PSV",
    }
  }

  render() {
       return ( 
        <>
          <PanoImage style={{position: 'relative', marginTop: '-10px'}} />
        </>
    )

  }
}


export default Home;
