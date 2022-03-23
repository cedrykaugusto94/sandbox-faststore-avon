import React, { lazy, Suspense } from 'react'
import Header from 'src/components/common/Header'
import Newsletter from 'src/components/common/Newsletter'
import Footer from 'src/components/common/Footer'
import Toast from 'src/components/common/Toast'
import { useUI } from 'src/sdk/ui'
import type { PropsWithChildren } from 'react'

const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))

function Layout({ children }: PropsWithChildren<unknown>) {
  const { displayMinicart } = useUI()

  return (
    <div id="layout">
     <Header />

      <main>{children}</main>

      <Newsletter />

      <Footer />

      <Toast />

      {displayMinicart && (
        <Suspense fallback={null}>
          <CartSidebar />
        </Suspense>
      )}
    </div>
  )
}

export default Layout
