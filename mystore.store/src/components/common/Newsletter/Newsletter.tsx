import React from 'react'
import { mark } from 'src/sdk/tests/mark'

import './newsletter.scss'

function Newsletter() {
  return (
    <section className='newsletter-main'>
      <div className='newsletter-main__container'>
        <div className='newsletter-main__text'>
          <h3>Fique por dentro!</h3>
          <p>Cadastre-se para ficar por dentro das novidades e ganhe 10% de desconto na sua primeira compra em todo o site.</p>
          <div className='newsletter-main__terms'>
            <input type='checkbox' name='check-accept' id='check-accept' />
            <label htmlFor='check-accept'>
              Aceito a 
              <a href='https://www.avon.com.br/institucional/politica-de-privacidade'> política e privacidade</a>
            </label>
          </div>
        </div>
        <div className='newsletter-main__form'>
          <form>
            <div>
              <input type='text' placeholder='Nome' />
            </div>
            <div>
              <input type='email' placeholder='E-mail' />
            </div>
            <div>
              <button type='submit'>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

Newsletter.displayName = 'Newsletter'

export default mark(Newsletter)