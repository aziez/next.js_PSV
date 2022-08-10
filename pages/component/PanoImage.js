import React, { useEffect } from 'react'
import { Viewer } from 'photo-sphere-viewer';
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from 'photo-sphere-viewer/dist/plugins/virtual-tour';
import { GyroscopePlugin } from 'photo-sphere-viewer/dist/plugins/gyroscope';
import { StereoPlugin } from 'photo-sphere-viewer/dist/plugins/stereo';
import { Animation } from 'photo-sphere-viewer';

import { marker } from '../data/Marker';
import { Nodes } from '../data/Node';
import { nav } from '../component/Navbar';
import { Alert } from 'antd';

var PanoImage = (props) => {
    const sphereElementRef = React.useRef();
    // const marker = markers[0];

    console.log(nav);

    useEffect(() => {
        let viewer = new Viewer({
            container: sphereElementRef.current,
            loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
            loadingTxt: 'Loading...',
            // navbar: {nav},
            navbar: ['autorotate','zoom', 'description', {
                id: 'virtual-tour',
                title: 'Virtual Tour',
                content: '<img src="https://photo-sphere-viewer.js.org/favicon.png" alt="Virtual Tour" />', 
                onClick: () => {
                    alert('Virtual Tour');
                }}],

            plugins: [
                [MarkersPlugin,  {markers: marker}], 
                [VirtualTourPlugin, {positionMode: VirtualTourPlugin.MODE_GPS, renderMode  :VirtualTourPlugin.MODE_3D,}],
                [GyroscopePlugin, {absolutePosition: true}],
                [StereoPlugin, {}],
            ],
        });

        var virtualTour = viewer.getPlugin(VirtualTourPlugin);
        
        virtualTour.setNodes(Nodes);
        
        viewer.on('click', (e, data) =>{
            console.log(`Clicked on longitude= ${data.longitude}, latitude = ${data.latitude}`);
            console.log(virtualTour);
        })

        viewer.on('ready', intro);
        // viewer.navbar.getButton('virtual-tour').show();

        function intro() {
            viewer.renderer.camera.far *= 2;
          
            new Animation({
              properties: {
                lat: { start: -Math.PI / 2, end: 0 },
                long: { start: Math.PI, end: 0 },
                zoom: { start: 0, end: 50 },
                fisheye: { start: 4, end: 0 },
              },
              duration: 2000,
              easing: 'inOutQuad',
              onTick: (properties) => {
                viewer.setOption('fisheye', properties.fisheye);
                viewer.rotate({ longitude: properties.long, latitude: properties.lat });
                viewer.zoom(properties.zoom);
              }
            });
          }

});
  

    return (
        <div ref={sphereElementRef} style={{width: '100vw', height: '100vh', position:'absolute' }}></div>
    )
}


export default PanoImage;