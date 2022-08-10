import { Result, Button } from "antd";
import React, { useEffect } from 'react'
import { Viewer } from 'photo-sphere-viewer';


var Welcome = (props) => {
    const vrBg = React.useRef();   

    useEffect(() => {
        let viewer = new Viewer({
            container: vrBg.current,
            panorama: './images/360.jpg',
            loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
            loadingTxt: 'Loading...',
            navbar: [],

        });

        viewer.rotate({
            x: 1500,
            y: 600,
          });

        viewer.setOptions({
            fisheye: true,
            autorotateSpeed: '-1rpm',

        });


    },);





   

        return (
            <>

               <div ref={vrBg} className="cover" style={{position: 'absolute' , width: '100vw', height: '100vh', background: 'black'}}></div>             
               <Result style={{position: 'relative'}} 
                icon = {<img src="https://unpam.ac.id/wp-content/uploads/2021/02/logo-unpam-300x291.png" />}
                title={<h1 style={{color: 'white'} }>Welcome To Virtual Tour</h1>} 
                subTitle="PhotoSphere Viewer is a free and open source viewer for 360° panoramas." 
                extra= {<Button type="primary" onClick={console.log("Testklik")}>Get Started</Button>}
                />

            </>
        )

}

export default Welcome;