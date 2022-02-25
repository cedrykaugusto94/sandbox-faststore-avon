import React from 'react'
import { List as UIList } from '@faststore/ui'

import './categoryMenu.scss'

interface CategoryMenu {
  title?: string
  link: string
}

interface Props {
  categoryMenu: CategoryMenu[]
  classes?: string
}

function CategoryMenus({ categoryMenu, classes = '' }: Props) {
  return (
    <div className={`category__menu ${classes} / grid-content-full`}>
      <UIList variant="unordered" className="grid-content">
        {categoryMenu.map((category, index) => (
          <li key={String(index)}>
            <div data-category-menu-content>
              {category.title && <a href={category.link}>{category.title}</a>}
            </div>
          </li>
        ))}
      </UIList>
    </div>
  )
}

export default CategoryMenus
