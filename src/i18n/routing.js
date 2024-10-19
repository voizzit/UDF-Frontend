import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = ({
  locales: ['en', 'ml'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      ml: '/pathnames'
    }
  }
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
