import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Disable automatic locale detection based on Accept-Language header
  localeDetection: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|az|bg|de|el|es-mx|fi|fr-ca|hi|hu|it|ja|kk|ko|pl|pt-br|ru|sv|tr|uz)/:path*']
};

