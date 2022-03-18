import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addData ,addData2} from '../redux/reducer/Reducer'
import { useNavigate } from 'react-router-dom';

function Home() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, hasSetPhoto] = useState(false);
    const history = useNavigate();
    const dispatch = useDispatch();

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: { width: 800, height: 400 }
        }).then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
            console.log(stream)
        }).catch(error => {
            console.log(error);
        })

    }

    const removePhoto = () => { hasSetPhoto(false) };


    const takePhoto = () => {
        hasSetPhoto(true);
        const width = 414;
        const height = width / (16 / 9);
        console.log(videoRef)
        let video = videoRef.current;

        let photo = photoRef.current;
        console.log(photo)

        photo.width = width;
        photo.height = height;

        let data = photo.getContext('2d');
        data.drawImage(video, 0, 0, width, height);
       
        // try {
        //      dispatch(addData(photo))  
        //         dispatch(addData2(video))     
        //     history('/welcome')

        // } catch(e)
        // {
        //     throw(e)
        // }
    }

    useEffect(() => {
        getVideo();
    }, [videoRef])
    return (
        <div>
            <div>
                <video ref={videoRef}></video>
            </div>
            <div>
                <button onClick={takePhoto}>Take Photo</button>
            </div>
            <div className={'result' + (hasPhoto ? ".hasPhoto" : '')} >

                <canvas ref={photoRef}></canvas>

            </div>
            <div>
                {hasPhoto ? <button onClick={removePhoto}>Remove Photo</button> : ''};
            </div>
        
        </div>
    );
}

export default Home;