import React, { useEffect } from 'react'
import { Viewer } from 'photo-sphere-viewer';
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from 'photo-sphere-viewer/dist/plugins/virtual-tour';

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
    });
    

    return (
        <div ref={sphereElementRef} style={{width: '100vw', height: '100vh', position:'absolute' }}></div>
    )
}


export default PanoImage;