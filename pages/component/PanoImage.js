import React, { useEffect } from 'react'
import { Viewer } from 'photo-sphere-viewer';
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from 'photo-sphere-viewer/dist/plugins/virtual-tour';
import { Animation } from 'photo-sphere-viewer';

import { marker } from '../data/Marker';
import { Nodes } from '../data/Node';

var PanoImage = (props) => {
    const sphereElementRef = React.useRef();
    // const marker = markers[0];

    useEffect(() => {
        let viewer = new Viewer({
            container: sphereElementRef.current,
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
                'move',
                'caption',
                'fullscreen',
            ],

            plugins: [
                [MarkersPlugin,  {markers: marker}], 
                [VirtualTourPlugin, {positionMode: VirtualTourPlugin.MODE_GPS, renderMode  :VirtualTourPlugin.MODE_3D,}]    
            ],
        });

        var virtualTour = viewer.getPlugin(VirtualTourPlugin);

        virtualTour.setNodes(Nodes);
        
        viewer.on('click', (e, data) =>{
            console.log(`Clicked on longitude= ${data.longitude}, latitude = ${data.latitude}`);
            console.log(virtualTour);
        })

        viewer.on('ready', intro);

        function intro() {
            // default far plane is too close to render fisheye=4
            // you can also skip this line and start with fisheye=2
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