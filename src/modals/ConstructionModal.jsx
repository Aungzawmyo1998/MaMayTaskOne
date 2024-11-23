import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import '../styles/construction-modal.css'

function ConstructionModal({ open, onClose }) {

    const const_body = useRef(null);

    // useEffect(()=>{
    //     console.log(const_body.current)
    // }, [])

    const handle = (e) => {
        console.log(e.target);
        console.log(const_body.current)
        if( !const_body.current.contains(e.target)) {
            onClose();
        }
        
    }
    
    if (!open) return null;

    return ReactDOM.createPortal (
        <div className='setting_construction' onClick={handle} >
            <div className="construction_modal_body" ref={const_body} >
                <div className="header">
                    <span className='text'>建設業界許可の設定</span>
                    <span className='close' onClick={ onClose }>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </div>
            </div>
        </div>,
        document.getElementById("constructionPortal")
    )
}

export default ConstructionModal