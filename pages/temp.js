import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'
import { Viewer } from 'photo-sphere-viewer';
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import "photo-sphere-viewer/dist/plugins/markers.css";



export default function Home() {

  const sphereElementRef = React.useRef();

    useEffect(() => {
      let viewer = new Viewer({
        container: sphereElementRef.current,
        panorama: './images/360.jpg',
        caption: 'test Panorama with PSV',
        loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
        loadingTxt: 'Loading...',
        navbar: [
          'autorotate',
          'zoom',
          {
            title: 'change Point',
            content:'test',
            onClick: () => {
              alert('test');
            }
          },
          'fullscreen',
          'caption',
        ],
        plugins: [[MarkersPlugin, {
          markers: [
            {
              id: 'image',
              longitude: -76.56,
              latitude: 4.86,
              image: 'https://photo-sphere-viewer.js.org/assets/pin-blue.png',
              width: 32,
              height: 32,
              anchor: 'bottom center',
              tooltip: 'A image marker. <b>Click me!</b>',
              content: content(),
            }
          ]
        }]],
        
      });

      var marker = viewer.getPlugin(MarkersPlugin);
      marker.on('click', (e, marker) => {
        console.log('posisi Marker ialah', marker.id);
        });
    });
    
    return ( 
        <>
         <div className={styles.sphere} ref={sphereElementRef} style={{width: '100vw', height: '100vh', position:'absolute' }}></div>
        <div className={styles.container} style={{position: 'absolute'}}>
          <h2 color='white'></h2>
          <content />
          </div>
       
        </>
    )

}

function content(){
  return(
    <div className="psv-marker-content">
      <h1>Hello</h1>
      <p>This is a tooltip</p>
    </div>
  )
}
