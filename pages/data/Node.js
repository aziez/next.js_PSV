import { marker } from "../data/Marker";

export const Nodes = [
    {
        id      : '1',
        panorama: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-2.jpg',
        thumbnail: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-2-thumb.jpg',
        name    : 'Two',
        links   : [
            { nodeId: '2' },
        ],
        position: [-80.156168, 25.666623, 3],
        panoData: { poseHeading: 318 },
    },

    {
        id      : '2',
        panorama: './images/360.jpg',
        thumbnail: 'https://photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-1-thumb.jpg',
        name    : 'One',
        caption    : 'One',
        links   : [
            { nodeId: '1' },
            
        ],
        markers: marker ,
        position: [-80.156479, 25.666725, 3],
        panoData: { poseHeading: 327 },

        
    },
];