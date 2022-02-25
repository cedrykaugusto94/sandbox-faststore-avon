import { Form, Label, Input, Checkbox } from '@faststore/ui'
import Button from 'src/components/ui/Button'
import React from 'react'
import { mark } from 'src/sdk/tests/mark'

import './newsletter.scss'

function Newsletter() {
  return (
    <Form>
      <h1> Fique por dentro!</h1>
      <h2>
        Cadastre-se para ficar por dentro das novidades e ganhe 10% de desconto
        na sua primeira compra em todo o site.
      </h2>
      <div>
        <Label htmlFor="name">Name:</Label>
        <Input
          id="name"
          // onChange={function noRefCheck() {}}
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          // onChange={function noRefCheck() {}}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <Label>
          <Checkbox required />I agree to receive emails from Brand. View our{' '}
          <a href="/">Privacy Policy</a>.
        </Label>
      </div>
      <Button type="submit">Cadastrar</Button>
    </Form>
  )
}

Newsletter.displayName = 'Newsletter'

export default mark(Newsletter)
