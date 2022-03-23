import React from 'react'
import Link from 'src/components/ui/Link'
import { List as UIList } from '@faststore/ui'
import type { AnchorHTMLAttributes } from 'react'
import { mark } from 'src/sdk/tests/mark'

interface NavLinksProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
}

function PreHeaderLinks({ onClickLink }: NavLinksProps) {
  const links = [
    {
      name: 'A Avon',
      title: 'A Avon',
      href: 'https://www.avon.com.br/institucional/a-avon',
      icon: '',
    },
    {
      name: 'Instituto Avon',
      title: 'Instituto Avon',
      href: 'https://institutoavon.org.br',
      icon: '',
    },
    {
      name: 'Carreiras',
      title: 'Carreiras',
      href: 'https://www.avon.com.br/institucional/carreira',
      icon: '',
    },
    {
      name: 'Quero ser Representante',
      title: 'Quero ser Representante',
      href: 'https://www.avon.com.br/institucional/seja-uma-revendedora?sc=1',
      icon: '',
    },
    {
      name: 'Encontre um(a) Representante',
      title: 'Encontre um(a) Representante',
      href: '#',
      icon: '',
    },
    {
      name: 'Já Represento',
      title: 'Já Represento',
      href: 'https://www.avoncomigo.avon.com.br/widget/avonwg2/#/login',
      icon: '',
    },
  ];

  return (
    <nav className='preheader-section__navItems'>
      <UIList>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              variant="display"
              to={link.href}
              onClick={onClickLink}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </UIList>
    </nav>
  )
}

PreHeaderLinks.displayName = 'PreHeaderLinks'

export default mark(PreHeaderLinks)