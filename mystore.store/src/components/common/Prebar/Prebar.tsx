import { List as UIList } from '@faststore/ui'
import React from 'react'
import Link from 'src/components/ui/Link'
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
      linkUrl: '/',
    },
    {
      linkId: 'jaRepresento',
      linkName: 'Já represento',
      linkUrl: '/',
    },
    {
      linkId: 'institutoAvon',
      linkName: 'Instituto Avon',
      linkUrl: '/',
    },
  ]

  return (
    <nav className="prebar-navlinks__list">
      <UIList className="bg-black">
        {links.map((link) => (
          <li key={link.linkId}>
            <Link variant="display" to={`${link.linkUrl}`}>
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
        <NavLinks />
      </div>
    </section>
  )
}

prebar.displayName = 'prebar'

export default mark(prebar)
