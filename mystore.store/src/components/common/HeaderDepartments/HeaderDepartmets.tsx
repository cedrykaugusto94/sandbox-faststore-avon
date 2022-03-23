import React from 'react'
import { mark } from 'src/sdk/tests/mark'

function HeaderDepartamentsLinks() {
  const links = [
    {
      title: 'BBB',
      items: [
        {
          href: '#',
          name: 'BBB'
        }
      ]
    },
  {
    title: 'Kits e Presentes',
    items: [
      {
        href: '#',
        name: 'Kits/Presentes'
      },
      {
        href: '#',
        name: 'Tratamentos'
      },
      {
        href: '#',
        name: 'Maquiagens'
      },
      {
        href: '#',
        name: 'Rosto'
      },
      {
        href: '#',
        name: 'Corpo e Banho'
      },
      {
        href: '#',
        name: 'Perfumaria'
      },
      {
        href: '#',
        name: 'Cabelo'
      },
      {
        href: '#',
        name: 'Cabelo'
      },
      {
        href: '#',
        name: 'Embalagens'
      },
    ]
  }
  ]

  return (
    <div>HeaderDepartamentsLinks</div>
  )
}

HeaderDepartamentsLinks.displayName = 'HeaderDepartamentsLinks'

export default mark(HeaderDepartamentsLinks)