import React from 'react'
import './ImageContainer.css'
import { MdOutlineFileUpload } from "react-icons/md";
const ImageContainer = () => {
    const [url, setUrl] = React.useState('');

    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };

    return (
        <div className="image-container">
            {
                url ?
                    <img
                        className='image-view'
                        style={{ width: '20%', height: '20%' }}
                        src={url} alt="" />
                    :
                    <div className="upload-container">
                        <input
                            type="file"
                            className="input-file"
                            accept=".png, .jpg, .jpeg"
                            onChange={onChange}
                        />
                        <div className='icon-container'><MdOutlineFileUpload /></div>
                        <p>Upload cover image(Optional)</p>
                        

                    </div>
            }
        </div>
    );
};

export default ImageContainer;