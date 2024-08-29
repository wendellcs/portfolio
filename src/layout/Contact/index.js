import { useState } from 'react'
import emailjs from '@emailjs/browser'

import './contact.sass'
import Popup from '../../components/Popup'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [showPopup , setShowPopup] = useState(false)
    const [popupInfo, setPopupInfo] = useState({})

    // TODO
    // Melhorar a verificação dos campos.
    // Criar alertas personalizados.

    function sendEmail(e){
        e.preventDefault()
        if(!name){
            setShowPopup(true)
            setPopupInfo({
                title:'Qual é o seu nome?',
                msg: 'O campo de nome não pode estar vazio.'
            })
            return
        } else if (!email){
            setShowPopup(true)
            setPopupInfo({
                title:'Email',
                msg: 'O campo de email também é bem importante.'
            })
            return
        } else if (!message){
            setShowPopup(true)
            setPopupInfo({
                title: 'Esqueceu o que queria dizer?',
                msg: 'Você esqueceu de digitar sua mensagem.'
            })
            return
        }

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        if(!email.test(regex)){
            setShowPopup(true)
            setPopupInfo({
                title: 'Parece ter algo errado com seu email',
                msg: 'Esse endereço de email não é valido.'
            })
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }
    
        emailjs.send('service_6df9uxd', 'template_dn719qo', templateParams, 't1GC33Co-S-A-KKMS')
        .then((response) => {
            alert('Email enviado')
            console.log(response.status, response.message)

            setName('')
            setEmail('')
            setMessage('')
        }).catch((e) => {
            console.log(e)
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
                        <input type='text' placeholder='Nome' 
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='contact-form-upper-box'>
                        <label>Email</label>
                        <input type='email' placeholder='Email' 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='contact-form-lower'>
                    <label>Mensagem</label>
                    <textarea resize='false' placeholder='Escreva sua mensagem aqui' 
                    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <button className='btn send' type='submit'>Enviar</button>
            </form>
        </section>
    )
}