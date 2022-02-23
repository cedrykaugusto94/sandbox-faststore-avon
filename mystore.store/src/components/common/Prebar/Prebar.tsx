import { List as UIList } from '@faststore/ui'
import React from 'react'
import Link from 'src/components/ui/Link'
import Button from 'src/components/ui/Button'
import { mark } from 'src/sdk/tests/mark'
import type { AnchorHTMLAttributes } from 'react'

import './prebar.scss'

interface NavLinksProps {
  onClickLink?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
}

function NavLinks({ onClickLink }: NavLinksProps) {
  const links = [
    {
      linkId: 'queroSerRepresentante',
      linkName: 'Quero ser representante',
      linkClass: '',
      linkUrl: '/',
    },
    {
      linkId: 'jaRepresento',
      linkName: 'Já represento',
      linkClass: 'is--active',
      linkUrl: '/',
    },
    {
      linkId: 'institutoAvon',
      linkName: 'Instituto Avon',
      linkClass: '',
      linkUrl: '/',
    },
  ]

  return (
    <nav className="prebar-navlinks__list">
      <UIList>
        {links.map((link) => (
          <li key={link.linkId}>
            <Link
              variant="display"
              className={link.linkClass}
              to={`${link.linkUrl}`}
            >
              {link.linkName}
            </Link>
          </li>
        ))}
      </UIList>
    </nav>
  )
}

function prebar() {
  return (
    <section className="prebar">
      <div className="prebar__header">
        <div className="prebar__cep">
          <p>
            Quer <span>frete grátis*?</span>
          </p>
          <Button
            variant="tertiary"
            data-testid="open-filter-button"
            aria-label="Digite seu CEP"
            // onClick={}
          >
            Digite seu CEP
          </Button>
        </div>
        <NavLinks />
      </div>
    </section>
  )
}

prebar.displayName = 'prebar'

export default mark(prebar)
