import React, { useEffect } from 'react'
import { Viewer } from 'photo-sphere-viewer';
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";


var PanoImage = (props) => {
    const sphereElementRef = React.useRef();

    useEffect(() => {
        let viewer = new Viewer({
            container: sphereElementRef.current,
            panorama: props.img,
            caption: props.caption,
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
            ],

            plugins: [[MarkersPlugin, {
                marker: [
                    {
                        id: 'image',
                        longitude: 1.3349516753265598,
                        latitude: 0.08338999103930123,
                        image: 'https://photo-sphere-viewer.js.org/assets/pin-blue.png',
                        width: 32,
                        height: 32,
                        anchor: 'bottom center',
                        tooltip: 'A image marker. <b>Click me!</b>',
                        content: "test sasas",
                        onClick: () => {
                            console.log('posisi Marker ialah', 'image');
                        }
                    },
                    
                ]
            }]],
        });


        viewer.on('click', (e, data) =>{
            console.log(`Clicked on longitude= ${data.longitude}, latitude = ${data.latitude}`);
        })
    });
    

    return (
        <div ref={sphereElementRef} style={{width: '100vw', height: '100vh', position:'absolute' }}></div>
    )
}


export default PanoImage;