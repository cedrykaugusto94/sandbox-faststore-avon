import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import Banner from 'src/components/sections/Banner'
// import BannerText from 'src/components/sections/BannerText'
import CategoriesHeader from 'src/components/sections/CategoryMenu/categoriesHeader'
import ProductShelf from 'src/components/sections/ProductShelf'
// import ProductTiles from 'src/components/sections/ProductTiles'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'

export type Props = PageProps<HomePageQueryQuery>

function Page(props: Props) {
  const {
    data: { site, allStoreProduct },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`
  const products = allStoreProduct?.nodes
  const haveProducts = products && products?.length > 0

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      {/*
        Sections: Components imported from '../components/sections' only.
        Do not import or render components from any other folder in here.
      */}
      <section className="page__section">
        <Banner
          imageSrc="https://avongroup.vtexassets.com/arquivos/ids/177413/20220114%20-%20Banner%20BBB%20HUB%20-%20Estrutura_v3%20(2).png"
          imageAlt="Quest 2 Controller on a table"
        />
      </section>

      <section className="page__section-categories">
        <CategoriesHeader />
      </section>

      {/* {haveProducts && (
        <section className="page__section page__section-shelf / grid-section">
          <h2 className="title-section / grid-content">Most Wanted</h2>
          <div className="page__section-content">
            <ProductShelf products={products.slice(0, 5)} />
          </div>
        </section>
      )} */}

      {/* {haveProducts && (
        <section className="page__section / grid-section grid-content">
          <h2 className="title-section">Just Arrived</h2>
          <div className="page__section-content">
            <ProductTiles products={products.slice(5, 8)} />
          </div>
        </section>
      )} */}

      {/* <section className="page__section / grid-section">
        <BannerText
          title="Receive our news and promotions in advance."
          caption="Enjoy and get 10% off on your first purchase."
          actionPath="/"
          actionLabel="Call to action"
        />
      </section> */}

      {haveProducts && (
        <section className="page__section page__section-shelf / grid-section">
          <div className="page__section-content">
            <ProductShelf products={products.slice(4, 8)} />
          </div>
        </section>
      )}
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }

    allStoreProduct(limit: 14) {
      nodes {
        ...ProductSummary_product
      }
    }
  }
`

Page.displayName = 'Page'

export default mark(Page)
