export const SITE_NAME = 'Minds and Muscles';
export const SITE_URL = 'https://mindsandmuscles.pl/';

/** Resolves a possibly-relative path to an absolute URL string against the given base. */
export function toAbsoluteUrl(path: string, base: string | URL): string {
  return new URL(path, base).href;
}

/** Base Organization JSON-LD node shared by every page that publishes structured data. */
export function buildOrganizationJsonLd(options?: { logo?: string; sameAs?: string[] }): Record<string, unknown> {
  return {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    ...(options?.logo && { logo: toAbsoluteUrl(options.logo, SITE_URL) }),
    ...(options?.sameAs && options.sameAs.length > 0 && { sameAs: options.sameAs }),
  };
}
