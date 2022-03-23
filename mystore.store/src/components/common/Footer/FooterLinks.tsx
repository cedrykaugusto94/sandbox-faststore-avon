import React, { useState } from 'react'
import { List as UIList } from '@faststore/ui'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

const links = [
  {
    title: 'Compre Avon',
    items: [
      {
        href: '/',
        name: 'Kits e Presentes',
      },
      {
        href: '/',
        name: 'Maquiagem',
      },
      {
        href: '/',
        name: 'Rosto',
      },
      {
        href: '/',
        name: 'Corpo e Banho',
      },
      {
        href: '/',
        name: 'Perfumaria',
      },
      {
        href: '/',
        name: 'Moda e Casa',
      },
      {
        href: '/',
        name: 'Cabelo',
      },
      {
        href: '/',
        name: 'Unhas',
      },
      {
        href: '/',
        name: 'Revista Digital',
      },
      {
        href: '/',
        name: 'Cupons de desconto',
      },
    ],
  },
  {
    title: 'A Avon',
    items: [
      {
        href: '/',
        name: 'Sobre nós',
      },
      {
        href: '/',
        name: 'Carreiras',
      },
      {
        href: '/',
        name: 'Represente a Avon',
      },
      {
        href: '/',
        name: 'Ética e Compliance',
      },
      {
        href: '/',
        name: 'Política de Privacidade',
      },
      {
        href: '/',
        name: 'Imprensa',
      },
      {
        href: '/',
        name: 'Já Represento',
      },
      {
        href: '/',
        name: 'Encontre Um(A) Representante',
      },
    ],
  },
  {
    title: 'Innstituto Avon',
    items: [
      {
        href: '/',
        name: 'Sobre',
      },
      {
        href: '/',
        name: 'Câncer de Mama',
      },
      {
        href: '/',
        name: 'Viol}encia Contre Meninas e Mulheres',
      },
    ],
  },
  {
    title: 'Suporte',
    items: [
      {
        href: '/',
        name: 'Atendimento ao Cliente',
      },
      {
        href: '/',
        name: 'F.A.Q',
      },
      {
        href: '/',
        name: 'Regulamento',
      },
      {
        href: '/',
        name: 'Troca e Devolução',
      },
    ],
  },
]

type LinkItem = {
  href: string
  name: string
}

interface LinksListProps {
  items: LinkItem[]
}

function LinksList({ items }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <li key={item.name}>
          <Link variant="footer" to={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className="footer__links">
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <div className="footer__links-columns">
          {links.map((section) => (
            <nav key={section.title}>
              <p className="title-sub-subsection">{section.title}</p>
              <LinksList items={section.items} />
            </nav>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FooterLinks
