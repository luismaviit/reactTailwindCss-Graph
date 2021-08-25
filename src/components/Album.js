import { useLazyQuery } from '@apollo/client';
import {GET_ALBUM} from "../graphql/album"
import React from 'react';
 export default function Album({title,albumId,clickCallback}){
     const [getAlbum]= useLazyQuery( GET_ALBUM, {
         variables: {id: albumId},
         onCompleted({ album}){
             clickCallback(album)
         console.log(album)}
     })
     return (
         <li className="cursor-pointer" onClick={() => getAlbum()}>
             {title}
             
         </li>
     )

 }