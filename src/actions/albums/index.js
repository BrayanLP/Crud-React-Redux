
import axios from 'axios'
 
export const SHOW_ALBUMS = 'SHOW_ALBUMS'
 
export function showAlbums() {
    
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((response) => {  
                dispatch( { type: SHOW_ALBUMS, payload: response.data } ) 
            }) 
    }
    
}