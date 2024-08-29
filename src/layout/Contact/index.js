import { useState } from 'react'
import emailjs from '@emailjs/browser'

import './contact.sass'
import Popup from '../../components/Popup'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const [showPopup , setShowPopup] = useState(false)
    const [popupInfo, setPopupInfo] = useState({})

    function formatPopupMessage(title, msg){
        setShowPopup(true)
        setPopupInfo({
            title,
            msg
        })
    }

    function sendEmail(e){
        e.preventDefault()

        let hasError = false
        let errorMessage = []

        setEmailError(false)
        setNameError(false)
        setMessageError(false)

        if(!name){
            errorMessage.push('O campo de nome não pode estar vazio.') 
            setNameError(true)
            hasError = true
        } 

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if(!regex.test(email)){
            errorMessage.push('Esse endereço de email não é válido.')
            setEmailError(true)
            hasError = true
        }

        if (!message){
            errorMessage.push('Você esqueceu de digitar sua mensagem.')
            setMessageError(true)
            hasError = true
        }

        if(hasError){
            console.log(errorMessage)
            formatPopupMessage('Há alguns problemas com o formulário:', errorMessage)
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }
    
        emailjs.send('service_6df9uxd', 'template_dn719qo', templateParams, 't1GC33Co-S-A-KKMS')
        .then(() => {
            formatPopupMessage('Deu tudo certo!', ['Sua mensagem já foi enviada.'])

            setName('')
            setEmail('')
            setMessage('')
        }).catch(() => {
            formatPopupMessage('Ué!!?', ['Algo deu errado.'])
        })
    }
    return (
        <section id='contact'>
            {showPopup && <Popup popupInfo={popupInfo} setShowPopup = {setShowPopup}/>}
           
            <h2 className='contact-title'>Contato</h2>

            <form action='#' className='contact-form' onSubmit={sendEmail}>
                <div className='contact-form-upper'>
                    <div className='contact-form-upper-box'>
                        <label>Nome</label>
                        <input type='text' className={`name-input ${nameError && 'error'}`} placeholder='Nome' 
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='contact-form-upper-box'>
                        <label>Email</label>
                        <input type='text' placeholder='Email' className={`email-input ${emailError && 'error'}`} 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='contact-form-lower'>
                    <label>Mensagem</label>
                    <textarea resize='false' placeholder='Escreva sua mensagem aqui' className={`message-input ${messageError && 'error'}`}
                    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <button className='btn send' type='submit'>Enviar</button>
            </form>
        </section>
    )
}