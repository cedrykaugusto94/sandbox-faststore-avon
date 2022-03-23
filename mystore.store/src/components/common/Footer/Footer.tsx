import React from 'react'
import {
  List as UIList,
  Icon as UIIcon,
  PaymentMethods as UIPaymentMethods,
} from '@faststore/ui'
import { mark } from 'src/sdk/tests/mark'
import IncentivesFooter from 'src/components/sections/Incentives/IncentivesFooter'
import SROnly from 'src/components/ui/SROnly'
import Link from 'src/components/ui/Link'
import Icon from 'src/components/ui/Icon'

import FooterLinks from './FooterLinks'

import './footer.scss'

function Footer() {
  return (
    <footer className="footer / grid-content-full">
      <div className="footer__section / grid-content">
        <section className="footer__social">
          <p className="title-sub-subsection">Siga a Avon</p>
          <UIList variant="unordered">
            <li>
              <Link
                as="a"
                href="https://www.facebook.com/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Facebook" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://www.instagram.com/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Instagram" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://www.pinterest.com/"
                title="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Pinterest" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://twitter.com/"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={<Icon width="24px" height="24px" name="Twitter" />}
                />
              </Link>
            </li>
          </UIList>
        </section>

        <FooterLinks />
      </div>

      <div className="footer__note / grid-content">
        <UIIcon
          component={
            <img
              src="/FastStore.png"
              alt="FastStore icon"
              width="124px"
              height="34px"
              loading="lazy"
            />
          }
        />

        <UIPaymentMethods>
          <p className="title-sub-subsection">Payment Methods</p>
          <UIList>
            <li>
              <Icon width="34px" height="24px" name="Visa" />
              <SROnly text="Visa" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Diners" />
              <SROnly text="Diners Club" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Mastercard" />
              <SROnly text="Mastercard" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="EloCard" />
              <SROnly text="Elo Card" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="PayPal" />
              <SROnly text="PayPal" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Stripe" />
              <SROnly text="Stripe" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="GooglePay" />
              <SROnly text="Google Pay" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="ApplePay" />
              <SROnly text="Apple Pay" />
            </li>
          </UIList>
        </UIPaymentMethods>

        <div className="footer__copyright / text-body-small">
          <p>This website uses VTEX technology</p>
          <p>
            In-store price may vary. Prices and offers are subject to change.
            2021 Store name. All rights reserved. Store is a trademark of Store
            and its affiliated companies.
          </p>
          <address>Mount St, 000, New York / NY - 00000.</address>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default mark(Footer)
