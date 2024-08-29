import { useEffect, useState } from 'react'
import './popup.sass'

export default function Popup({popupInfo, setShowPopup}){
    const [popupTitle, setpopupTitle] = useState('')
    const [popupMessage, setPopupMessage] = useState('')

    function closePopup(){
        setShowPopup(false)
    }   

    useEffect(() => {
        const {title, msg} = popupInfo
        if(msg && title){
            setPopupMessage(msg)
            setpopupTitle(title)
        }
    }, [popupInfo])

    return (
        <div className='container-popup'>
            <h2>{popupTitle}</h2>
            <p>{popupMessage}</p>

            <button className='btn close-popup' onClick={closePopup}>Ok</button>
        </div>
    )
}