import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'
import PanoImage from './component/PanoImage';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.img = "../images/360.jpg";
    this.caption = "Contoh Captions di 360";
  }

  render() {
       return ( 
        <>
        <div className={styles.container} style={{position: 'absolute'}}>
          <h2 color='white'></h2>
          
          </div>
          <PanoImage img={this.img} caption={this.caption} />
        </>
    )

  }
}


export default Home;
