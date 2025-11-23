'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

/**
 * Footer компонент
 * Полная структура футера с ссылками, приложениями, социальными сетями и переключателем языка
 */
export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);
  const paymentsRef = useRef<HTMLDivElement>(null);

  // Список способов оплаты
  const paymentMethods = [
    'visa',
    'mastercard',
    'logo_neteller',
    'logo_skrill',
    'logo_webmoney',
    'logo_mobil',
    'logo_apple_pay',
    'logo_bitcoin',
    'logo_piastrix',
    'logo_monetix',
    'logo_boleto',
    'logo_online_brazil_banks',
    'logo_loterica',
    'logo_cepbank',
    'logo_hizliqr',
    'logo_oxxo',
    'logo_p2p',
    'logo_eparatr',
    'logo_mexico_online_banking',
    'logo_mkarekod',
    'logo_ethereum',
    'logo_tether_bep20',
    'logo_tether',
    'logo_tether_trc20',
    'logo_usdc_bep20',
    'logo_usdc_erc20',
    'logo_jeton',
    'logo_much_better',
    'logo_rapid_transfer',
    'logo_faster_payments_system',
    'logo_bloomzed_wallet',
    'logo_pix',
    'logo_litecoin',
    'logo_binance',
    'logo_binance_erc2',
    'logo_tron',
    'logo_sepa',
    'logo_card_to_crypto',
    'logo_card_by_crypto',
    'logo_blik',
    'logo_emanat',
    'logo_m10',
    'logo_bank_transfer_p2p',
    'logo_any_bank_transfer_p2p',
    'logo_ton',
    'logo_google_pay',
    'logo_usdt_ton',
    'logo_google_pay_mastercard',
    'logo_paytm',
    'logo_upi',
    'logo_phone_pe',
    'logo_imps',
    'logo_iban',
    'logo_bank_card_mastercard',
    'logo_bank_card_visa',
    'logo_uzcard',
    'logo_humo',
    'logo_bybit_pay',
    'logo_binance_pay',
    'logo_payme',
    'logo_click',
    'logo_bank_card_humo',
    'logo_alfapay_oneclick',
    'logo_vtbpay',
    'logo_bank_cards',
  ];

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (paymentsRef.current && !paymentsRef.current.contains(event.target as Node)) {
        setIsPaymentsOpen(false);
      }
    };

    if (isPaymentsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPaymentsOpen]);

  return (
    <footer data-blur="blur" className="text-white" style={{ backgroundColor: '#17171F' }}>
      {/* Основная часть футера */}
      <div className="block footer_main footer_inner_container py-4 px-4">
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          {/* Ссылки помощи */}
          <ul className="footer_help flex flex-wrap justify-center md:justify-between items-center mb-4 gap-y-2" style={{ width: '100%' }}>
            <li>
              <a href="#contact-us" className="snowplow_link text-white hover:text-gray-300 transition-colors">
                {t('links.contactUs')}
              </a>
            </li>
            <li>
              <a href="#terms-and-conditions" className="snowplow_link text-white hover:text-gray-300 transition-colors">
                {t('links.termsAndConditions')}
              </a>
            </li>
            <li>
              <a
                href="https://static-a.vavada-cdn.net/resources/Privacy_policy.a7d5cb93c01276419ee3269bb0f022bf.pdf"
                target="_blank"
                download="privacy_policy"
                className="snowplow_link text-white hover:text-gray-300 transition-colors"
              >
                {t('links.privacyPolicy')}
              </a>
            </li>
            <li>
              <Link href={`/${locale}/review`} className="snowplow_link text-white hover:text-gray-300 transition-colors">
                {t('links.review')}
              </Link>
            </li>
            <li>
              <a href="#sport-conditions" className="snowplow_link text-white hover:text-gray-300 transition-colors">
                {t('links.sportConditions')}
              </a>
            </li>
            <li>
              <a
                href="https://vavadapart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="snowplow_link text-white hover:text-gray-300 transition-colors"
              >
                {t('links.affiliateProgram')}
              </a>
            </li>
            <li>
              <a href="#responsible-gaming" className="snowplow_link text-white hover:text-gray-300 transition-colors">
                {t('links.responsibleGaming')}
              </a>
            </li>
          </ul>

          {/* Кнопки приложений и социальные сети */}
          <div className="footer_application flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 mb-3">
            {/* Первый ряд: iOS и Android */}
            <div className="flex justify-center items-center gap-4">
            <a
              href="https://vavada-ios-app.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn_application btn_application_ios flex items-center gap-2 rounded-full px-4 transition-opacity hover:opacity-90"
              style={{ 
                width: '141px',
                height: '48px',
                backgroundColor: '#303036',
                boxShadow: '0 4px 8px rgba(48, 48, 54, 0.5)'
              }}
            >
              <span>
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.05 7.33559C16.2337 7.33559 16.5467 7.36568 16.9891 7.42585C17.4315 7.48603 17.9157 7.65796 18.4416 7.94165C18.9759 8.21674 19.46 8.67666 19.8941 9.32141C19.869 9.3472 19.748 9.44176 19.531 9.60509C19.3139 9.75983 19.0718 9.99194 18.8047 10.3014C18.5376 10.6023 18.3039 10.9891 18.1035 11.462C17.9032 11.9262 17.803 12.4807 17.803 13.1254C17.803 13.8647 17.9282 14.4923 18.1787 15.0081C18.4374 15.5239 18.7338 15.9408 19.0677 16.2589C19.4099 16.5683 19.7104 16.7962 19.9692 16.9423C20.2363 17.0884 20.3782 17.1658 20.3949 17.1744C20.3866 17.2088 20.2781 17.514 20.0694 18.0899C19.869 18.6659 19.5351 19.3064 19.0677 20.0113C18.6586 20.6216 18.2162 21.1847 17.7404 21.7005C17.2729 22.2163 16.7095 22.4742 16.05 22.4742C15.6076 22.4742 15.2445 22.4097 14.9607 22.2808C14.6768 22.1432 14.3847 22.01 14.0842 21.881C13.7836 21.7435 13.3788 21.6747 12.8696 21.6747C12.3771 21.6747 11.9639 21.7435 11.63 21.881C11.3044 22.0186 10.9914 22.1561 10.6909 22.2937C10.3987 22.4312 10.0523 22.5 9.65159 22.5C9.04221 22.5 8.50797 22.2507 8.04885 21.7521C7.58973 21.2535 7.11809 20.656 6.63393 19.9597C6.07465 19.1344 5.59466 18.1286 5.19397 16.9423C4.80164 15.7474 4.60547 14.5438 4.60547 13.3317C4.60547 12.0336 4.84338 10.9462 5.31919 10.0693C5.795 9.18386 6.40438 8.51762 7.14731 8.0706C7.89859 7.61498 8.67492 7.38717 9.47629 7.38717C9.90202 7.38717 10.3027 7.46024 10.6783 7.60638C11.054 7.74393 11.4046 7.88577 11.7301 8.03191C12.064 8.17806 12.3646 8.25113 12.6317 8.25113C12.8905 8.25113 13.191 8.17376 13.5332 8.01902C13.8755 7.86428 14.2595 7.71384 14.6852 7.5677C15.1109 7.41296 15.5659 7.33559 16.05 7.33559ZM15.3613 5.69794C15.0358 6.10198 14.6268 6.44154 14.1342 6.71663C13.6417 6.98313 13.1743 7.11638 12.7319 7.11638C12.64 7.11638 12.5524 7.10778 12.4689 7.09059C12.4606 7.0648 12.4522 7.01752 12.4439 6.94874C12.4355 6.87997 12.4313 6.8069 12.4313 6.72953C12.4313 6.21373 12.5399 5.71513 12.7569 5.23372C12.9739 4.74371 13.2202 4.33967 13.4957 4.0216C13.8463 3.59177 14.2887 3.23501 14.8229 2.95132C15.3572 2.66763 15.8664 2.51719 16.3505 2.5C16.3756 2.61176 16.3881 2.745 16.3881 2.89974C16.3881 3.41554 16.2921 3.91844 16.1001 4.40845C15.9081 4.88986 15.6619 5.31969 15.3613 5.69794Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="btn_application_text flex flex-col">
                <span className="text-sm">{t('apps.ios.label')}</span>
                <span className="btn_application_text_os text-xs text-gray-400">{t('apps.ios.os')}</span>
              </div>
            </a>

            <a
              href="https://pwavavadacom.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn_application btn_application_android flex items-center gap-2 rounded-full px-4 transition-opacity hover:opacity-90"
              style={{ 
                width: '141px',
                height: '48px',
                backgroundColor: '#309C4D',
                boxShadow: '0 4px 8px rgba(48, 156, 77, 0.5)'
              }}
            >
              <span>
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_9298_6946" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="5" width="25" height="16">
                    <path d="M0 5.70801H25V20.2913H0V5.70801Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_9298_6946)">
                    <path
                      d="M23.9356 19.2007C23.9283 19.1535 23.9209 19.1068 23.9132 19.0604C23.7142 17.8583 23.3262 16.6953 22.7636 15.6146C22.5156 15.1386 22.2351 14.6803 21.924 14.243C21.5444 13.7095 21.1203 13.2092 20.6562 12.7474C20.0389 12.1322 19.3542 11.5886 18.6151 11.1271C18.6194 11.1195 18.6237 11.112 18.6281 11.1045C18.8602 10.7031 19.0924 10.3017 19.3246 9.9003L20.0055 8.72431C20.1687 8.44285 20.3316 8.16125 20.4943 7.87953C20.5329 7.81264 20.5635 7.74376 20.5863 7.67291C20.6323 7.52922 20.6473 7.37737 20.6302 7.22745C20.613 7.07754 20.5642 6.93299 20.487 6.80342C20.3971 6.65286 20.2711 6.52716 20.1204 6.43775C19.9831 6.35637 19.8293 6.30687 19.6704 6.29289C19.5488 6.28256 19.4264 6.29318 19.3084 6.3243C19.1742 6.35997 19.0483 6.42179 18.938 6.50623C18.8277 6.59067 18.7351 6.69607 18.6655 6.81638C18.5024 7.09798 18.3395 7.37957 18.1768 7.66116L17.4958 8.83715C17.2638 9.23881 17.0312 9.6397 16.7992 10.0413C16.7738 10.0851 16.7484 10.129 16.723 10.1733C16.6877 10.1592 16.6529 10.1452 16.6176 10.1318C15.3382 9.64305 13.9499 9.37574 12.4988 9.37574C12.4592 9.37564 12.4196 9.37584 12.38 9.37635C11.1246 9.38774 9.87953 9.60422 8.69387 10.0173C8.56011 10.064 8.42768 10.1132 8.29656 10.1649C8.27279 10.1238 8.24908 10.0828 8.22541 10.042C7.99324 9.64041 7.76102 9.23901 7.52875 8.83776L6.84777 7.66162C6.68466 7.38015 6.52175 7.09855 6.35905 6.81684C6.25854 6.64306 6.11064 6.50154 5.93268 6.40885C5.75471 6.31617 5.55405 6.27616 5.35419 6.2935C5.19514 6.30696 5.04124 6.3565 4.90417 6.43836C4.66644 6.57972 4.49372 6.8089 4.42322 7.07653C4.35127 7.34803 4.38978 7.63701 4.53032 7.88014L5.01903 8.72492L5.70001 9.90106C5.93203 10.3027 6.16466 10.7036 6.39668 11.1053C6.3982 11.1086 6.40049 11.112 6.40216 11.1153C5.65576 11.58 4.96442 12.1279 4.34141 12.7486C3.87761 13.2106 3.45351 13.7109 3.07361 14.2442C2.76215 14.6813 2.48166 15.1396 2.23419 15.6159C1.6717 16.6965 1.2837 17.8595 1.08461 19.0616C1.04903 19.2766 1.01951 19.4926 0.996094 19.7092H24C23.9816 19.5397 23.9596 19.3705 23.9339 19.2019L23.9356 19.2007Z"
                      fill="white"
                    />
                    <path
                      d="M19.0001 16.8282C19.5004 16.4948 19.5731 15.7232 19.1625 15.1047C18.7519 14.4866 18.0137 14.2557 17.5135 14.5893C17.0133 14.9227 16.9407 15.6943 17.3512 16.3128C17.7617 16.9309 18.4999 17.1618 19.0001 16.8282ZM7.66516 16.3146C8.07575 15.6965 8.00291 14.9247 7.50291 14.5911C7.00257 14.2577 6.26433 14.4886 5.8539 15.1069C5.44347 15.7252 5.51598 16.4967 6.01615 16.8303C6.51632 17.1639 7.25456 16.9331 7.66516 16.3146Z"
                      fill="#34A853"
                    />
                  </g>
                </svg>
              </span>
              <div className="btn_application_text flex flex-col">
                <span className="text-sm">{t('apps.android.label')}</span>
                <span className="btn_application_text_os text-xs text-gray-200">{t('apps.android.os')}</span>
              </div>
            </a>
            </div>

            {/* Второй ряд: Социальные сети */}
            <div className="flex justify-center items-center gap-4">
            <a
              className="snowplow_link social_telegram rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
              href="https://t.me/vavada_game"
              target="_blank"
              rel="nofollow noopener noreferrer"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#0088cc',
                boxShadow: '0 4px 8px rgba(0, 136, 204, 0.5)'
              }}
            >
              <img
                src="/assets/images/footer/icon_social_telegram.svg"
                alt="Telegram"
                loading="lazy"
                className="w-6 h-6"
              />
            </a>
            <a
              className="snowplow_link social_vkontakte rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
              href="https://vk.com/vavada_vkgroup"
              target="_blank"
              rel="nofollow noopener noreferrer"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#4C75A3',
                boxShadow: '0 4px 8px rgba(76, 117, 163, 0.5)'
              }}
            >
              <img
                src="/assets/images/footer/icon_social_vkontakte.svg"
                alt="VKontakte"
                loading="lazy"
                className="w-6 h-6"
              />
            </a>
            <a
              className="snowplow_link social_youtube rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
              href="https://youtube.com/@vavadaofficial"
              target="_blank"
              rel="nofollow noopener noreferrer"
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#FF0000',
                boxShadow: '0 4px 8px rgba(255, 0, 0, 0.5)'
              }}
            >
              <img
                src="/assets/images/footer/icon_social_youtube.svg"
                alt="YouTube"
                loading="lazy"
                className="w-6 h-6"
              />
            </a>
            </div>
          </div>
        </div>
      </div>

      {/* Вторая часть футера */}
      <div className="block footer_second py-6 px-4">
        {/* Линия разделения */}
        <div className="mx-auto border-t mb-3" style={{ maxWidth: '1200px', borderColor: '#2a2a35' }}></div>
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="footer_second_container">
            <div className="footer_inner_container footer_copyright_lang_container flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
              {/* Переключатель языка (мобильный) */}
              <span className="footer_lang_mobile md:hidden flex justify-center">
                <LanguageSwitcher />
              </span>

              {/* Предупреждение 18+ */}
              <div className="copyright_age_warning flex-1">
                <div className="warning_item copyright_age_warning_item flex items-start gap-3">
                  <img
                    src="/assets/images/footer/icon_18_plus.svg"
                    className="age_18 w-8 h-8 flex-shrink-0"
                    alt="18+"
                    loading="lazy"
                  />
                  <div className="p_warning flex flex-col" style={{ color: '#646A87', fontSize: '0.75rem', lineHeight: '1.1' }}>
                    <p className="m-0">{t('warning.line1')}</p>
                    <p className="m-0">{t('warning.line2')}</p>
                    <p className="m-0">{t('warning.line3')}</p>
                  </div>
                </div>
              </div>

              {/* Переключатель языка (десктоп) */}
              <span className="footer_lang_desktop hidden md:block">
                <LanguageSwitcher />
              </span>
            </div>

            {/* Способы оплаты */}
            <div className="footer_payments mt-6" ref={paymentsRef}>
              <div className="footer_payments_selector_container flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsPaymentsOpen(!isPaymentsOpen)}
                  className="footer_payments_selector snowplow_button flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  data-expand=""
                  data-expand-class="footer_payments_list"
                >
                  <h3 className="text-sm font-medium">{t('payments.title')}</h3>
                  <svg
                    className={`w-4 h-4 transition-transform ${isPaymentsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Выпадающий список способов оплаты */}
              {isPaymentsOpen && (
                <ul className="footer_payments_list mt-4 grid grid-cols-10 gap-3 w-full">
                  {/* Первые 60 элементов - 6 рядов по 10 элементов */}
                  {paymentMethods.slice(0, 60).map((method, index) => {
                    let fileName: string;
                    if (method === 'visa') {
                      fileName = 'visa.svg';
                    } else if (method === 'mastercard') {
                      fileName = 'mastercard.svg';
                    } else {
                      fileName = `${method}.svg`;
                    }
                    
                    return (
                      <li key={method} className="flex items-center justify-center">
                        <div 
                          className="w-full rounded-md p-1.5 transition-colors flex items-center justify-center aspect-[16/9]"
                          style={{ backgroundColor: '#202028' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a2a35'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#202028'}
                        >
                          <img
                            src={`/assets/images/footer/${fileName}`}
                            alt={method.replace('logo_', '')}
                            loading="lazy"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </li>
                    );
                  })}
                  
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
