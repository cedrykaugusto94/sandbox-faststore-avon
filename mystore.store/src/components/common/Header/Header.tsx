import React, { useRef, useState } from 'react'
import { mark } from 'src/sdk/tests/mark'
import PreHeader from '../PreHeader';
import { Link, IconButton } from '@faststore/ui';
import SearchInput from '../SearchInput'
import {
  LogoIcon,
  AccountIcon,
  OrdersIcon,
  FavoritesIcon,
  CartIcon
} from './Icons'

import './header.scss'

function Header() {
  return (
    <>
      <PreHeader />
      <header className='main-header'>
        <div className='main-header__container'>
          <div className='main-header__logo'>
            <h1>
              <Link to='/test'>
                <IconButton
                  aria-label="forward slide image selector"
                  icon={<LogoIcon color="#000" />}
                />
              </Link>
            </h1>
          </div>
          <div className='main-header__actions'>
            <SearchInput />
            <nav>
              <ul>
                <li>
                  <AccountIcon color='#000' />
                  <p>Entrar</p>
                </li>
                <li>
                  <OrdersIcon color='#000' />
                  <p>Pedidos</p>
                </li>
                <li>
                  <FavoritesIcon color='#000' />
                  <p>Favoritos</p>
                </li>
                <li>
                  <CartIcon color='#000' />
                  <p>Carrinho</p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

Header.displayName = 'Header'

export default mark(Header)