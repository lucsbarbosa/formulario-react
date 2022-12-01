import ReCAPTCHA from 'react-google-recaptcha'
import './Form.scss'

export default function Form() {
    return (
        <div className="outside-container">
            <div className="inner-container">
                <h3>Formulário de contato</h3>
                <form>
                    <div className='input-group'>
                        <input type="text" placeholder='Seu nome *' />
                        <input type="text" placeholder='Seu e-mail' />
                        <input type="text" placeholder='Assunto' />
                        <input type="text" placeholder='Sua mensagem *' />
                    </div>
                    <div className='submit-group'>
                        <ReCAPTCHA 
                            sitekey='6LdsuUojAAAAAJxJgTVtmDwwro-7xwbU2isk8kPN' 
                         />
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}