import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import Button from 'src/components/ui/Button'
import PreHeaderLinks from './PreHeaderLinks'
import './preheader.scss'

function PreHeader() {
  return (
    <section className='preheader-section'>
      <div className='preheader-section__container'>
        <div className='preheader-section__freeShipping'>
          <h3>Quer <strong>FRETE GRÁTIS?</strong></h3>
          <button>Digite seu CEP</button>
        </div>
        <PreHeaderLinks />
      </div>
    </section>
  )
}

PreHeader.displayName = 'PreHeader'

export default mark(PreHeader)