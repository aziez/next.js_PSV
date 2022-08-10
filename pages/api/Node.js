// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Nodes } from "../data/Node";
import { marker } from "../data/Marker";


export default function handler(req, res) {;
    
  res.status(200).json({Nodes});
}
 