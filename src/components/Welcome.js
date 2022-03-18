import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
    const history = useNavigate();
    const photo = useSelector((state) => state.addPhoto.addPhoto);
    const video = useSelector((state) => state.addVideo.addVideo);

    useEffect(() => {
        if (!photo) {
            history('/')
        }
        const width = 414;
        const height = width / (16 / 9);
        let data = photo.getContext('2d');
        data.drawImage(video, 0, 0, width, height);
    }, [])

    return (
        <div>
            <div>
                <div className={'result.hasPhoto'} >
             <canvas ref={photo}></canvas> 
             </div>
            </div>
        </div>
    )
}
export default Welcome;