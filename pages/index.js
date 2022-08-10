import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'
import PanoImage from './component/PanoImage';
import Welcome from './component/Welcome';



class Home extends React.Component {

  render() {
       return ( 
        <>
          {/* <PanoImage style={{position: 'relative', marginTop: '-10px'}} /> */}
          <Welcome />
          
        </>
    )

  }
}


export default Home;
