'use client';

import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface ReviewContentProps {
  locale: string;
}

export default function ReviewContent({ locale }: ReviewContentProps) {
  const currentLocale = useLocale();
  const t = useTranslations('review');
  const tCommon = useTranslations('common');

  const tBreadcrumbs = useTranslations('breadcrumbs');
  
  const breadcrumbItems = [
    { label: tBreadcrumbs('home'), href: `/${currentLocale}` },
    { label: t('title').split(':')[0] || t('title') },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 md:py-12" itemScope itemType="https://schema.org/Article">
      {/* Хлебные крошки */}
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Заголовок */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4" itemProp="headline">
          {t('title')}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed" itemProp="description">
          {t.rich('intro', {
            casino: (chunks) => (
              <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                {chunks}
              </Link>
            ),
          })}
        </p>
        <meta itemProp="datePublished" content="2024-01-15T00:00:00Z" />
        <meta itemProp="dateModified" content={new Date().toISOString()} />
        <meta itemProp="author" itemScope itemType="https://schema.org/Organization" />
        <meta itemProp="name" content="Vavada" />
      </header>

      {/* Оглавление */}
      <nav className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#161626' }} aria-label="Table of Contents">
        <h2 className="text-xl font-bold text-white mb-4">{t('toc.title')}</h2>
        <ul className="space-y-2 text-gray-300" role="list">
          <li><a href="#games" className="hover:text-yellow-400 transition-colors" aria-label={t('toc.games')}>{t('toc.games')}</a></li>
          <li><a href="#registration" className="hover:text-yellow-400 transition-colors" aria-label={t('toc.registration')}>{t('toc.registration')}</a></li>
          <li><a href="#bonuses" className="hover:text-yellow-400 transition-colors" aria-label={t('toc.bonuses')}>{t('toc.bonuses')}</a></li>
          <li><a href="#security" className="hover:text-yellow-400 transition-colors" aria-label={t('toc.security')}>{t('toc.security')}</a></li>
          <li><a href="#mirrors" className="hover:text-yellow-400 transition-colors" aria-label={t('toc.mirrors')}>{t('toc.mirrors')}</a></li>
          <li><a href="#tips" className="hover:text-yellow-400 transition-colors" aria-label={t('toc.tips')}>{t('toc.tips')}</a></li>
        </ul>
      </nav>

      {/* Основной контент */}
      <div className="prose prose-invert max-w-none">
        {/* Игровой портфель */}
        <section id="games" className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('games.title')}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {t.rich('games.intro', {
              playngo: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
              evolution: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
            })}
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300">
                  {t('games.slots.title')}
                </Link>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t.rich('games.slots.text', {
                  mainPage: (chunks) => (
                    <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                      {chunks}
                    </Link>
                  ),
                  slots: (chunks) => (
                    <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('games.tableGames.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('games.tableGames.text')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300">
                  {t('games.live.title')}
                </Link>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('games.live.text')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300">
                  {t('games.tournaments.title')}
                </Link>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('games.tournaments.text')}
              </p>
            </div>
          </div>
        </section>

        {/* Регистрация */}
        <section id="registration" className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('registration.title')}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {t('registration.intro')}
          </p>

          <ol className="space-y-4 text-gray-300 mb-6 list-decimal list-inside">
            <li>
              <strong className="text-white">{t('registration.steps.form')}</strong>
            </li>
            <li>
              <strong className="text-white">{t('registration.steps.currency')}</strong>
            </li>
            <li>
              <strong className="text-white">{t('registration.steps.confirm')}</strong>
            </li>
            <li>
              <strong className="text-white">{t('registration.steps.activate')}</strong>
            </li>
          </ol>

          <p className="text-gray-300 leading-relaxed">
            {t.rich('registration.after', {
              registration: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
              bonuses: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </section>

        {/* Бонусы */}
        <section id="bonuses" className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('bonuses.title')}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {t('bonuses.intro')}
          </p>

          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t('bonuses.welcome.title')}</h3>
              <p className="leading-relaxed">
                {t.rich('bonuses.welcome.text', {
                  bonuses: (chunks) => (
                    <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t('bonuses.cashback.title')}</h3>
              <p className="leading-relaxed">
                {t('bonuses.cashback.text')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t('bonuses.promo.title')}</h3>
              <p className="leading-relaxed">
                {t('bonuses.promo.text')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t('bonuses.loyalty.title')}</h3>
              <p className="leading-relaxed">
                {t.rich('bonuses.loyalty.text', {
                  bonuses: (chunks) => (
                    <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </div>
          </div>
        </section>

        {/* Безопасность */}
        <section id="security" className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('security.title')}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            <strong className="text-white">{t('security.intro')}</strong>
          </p>

          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t('security.license.title')}</h3>
              <p className="leading-relaxed">
                {t('security.license.text')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t('security.data.title')}</h3>
              <p className="leading-relaxed">
                {t('security.data.text')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">{t('security.support.title')}</h3>
              <p className="leading-relaxed">
                {t('security.support.text')}
              </p>
            </div>
          </div>
        </section>

        {/* Зеркала */}
        <section id="mirrors" className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('mirrors.title')}
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {t.rich('mirrors.intro', {
              casino: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
              mirrors: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
              security: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
            })}
          </p>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('mirrors.howTo.title')}</h3>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>
                <strong className="text-white">{t('mirrors.howTo.official')}</strong>
              </li>
              <li>
                <strong className="text-white">{t('mirrors.howTo.search')}</strong>
              </li>
              <li>
                <strong className="text-white">{t('mirrors.howTo.forums')}</strong>
              </li>
            </ul>
          </div>
        </section>

        {/* Советы */}
        <section id="tips" className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('tips.title')}
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong className="text-white">{t.rich('tips.rules', {
                slot: (chunks) => (
                  <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                    {chunks}
                  </Link>
                ),
              })}</strong>
            </li>
            <li>
              <strong className="text-white">{t('tips.bankroll')}</strong>
            </li>
            <li>
              <strong className="text-white">{t('tips.bonuses')}</strong>
            </li>
            <li>
              <strong className="text-white">{t.rich('tips.updates', {
                games: (chunks) => (
                  <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                    {chunks}
                  </Link>
                ),
                mirrors: (chunks) => (
                  <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                    {chunks}
                  </Link>
                ),
              })}</strong>
            </li>
          </ul>
        </section>

        {/* Итог */}
        <section className="mb-10 p-6 rounded-lg" style={{ backgroundColor: '#161626' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t('conclusion.title')}</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {t.rich('conclusion.text', {
              games: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
              bonuses: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
              registration: (chunks) => (
                <Link href={`/${currentLocale}`} className="text-yellow-400 hover:text-yellow-300 underline">
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </section>
      </div>

      {/* CTA кнопка */}
      <div className="mt-12 text-center">
        <Link
          href={`/${currentLocale}`}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold uppercase hover:opacity-90 transition-opacity text-sm md:text-base"
          style={{
            height: '40px',
            width: 'fit-content',
            background: 'linear-gradient(to bottom, #9FE082, #7DCD5E)',
            boxShadow: '0 4px 8px rgba(125, 205, 94, 0.5)',
            color: 'white',
          }}
        >
          {t('cta')}
        </Link>
      </div>
    </article>
  );
}
