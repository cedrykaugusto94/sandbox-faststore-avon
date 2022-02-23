import React from 'react'

import CategoryMenu from './categoryMenu'

const categoryMenu = [
  {
    title: 'Rosto',
    link: '/',
  },
  {
    title: 'Maquiagem',
    link: '/',
  },
  {
    title: 'Todos',
    link: '/',
  },
  {
    title: 'Perfurmaria',
    link: '/',
  },
]

function IncentivesHeader() {
  return (
    <>
      <h1>Navegue pelas categorias e escolha seus produtos:</h1>
      <CategoryMenu categoryMenu={categoryMenu} classes="categories--colored" />
    </>
  )
}

export default IncentivesHeader
