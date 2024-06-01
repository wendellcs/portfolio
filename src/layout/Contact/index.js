import './contact.sass'
export default function Contact() {
    return (
        <section id='contact'>
            <h2 className='contact-title'>Contato</h2>

            <form action='#' className='contact-form'>
                <div className='contact-form-upper'>
                    <div className='contact-form-upper-box'>
                        <label>Nome</label>
                        <input type='text' placeholder='Nome' />
                    </div>
                    <div className='contact-form-upper-box'>
                        <label>Email</label>
                        <input type='email' placeholder='Email' />
                    </div>
                </div>
                <div className='contact-form-lower'>
                    <label>Mensagem</label>
                    <textarea resize='false' placeholder='Escreva sua mensagem aqui'></textarea>
                </div>

                <button className='btn send' type='submit'>Enviar</button>
            </form>
        </section>
    )
}