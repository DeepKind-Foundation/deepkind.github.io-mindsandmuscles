export const SITE_NAME = 'Minds and Muscles';
export const SITE_URL = 'https://minds-and-muscles.pl/';

/** Resolves a possibly-relative path to an absolute URL string against the given base. */
export function toAbsoluteUrl(path: string, base: string | URL): string {
  return new URL(path, base).href;
}

/** Base Organization JSON-LD node shared by every page that publishes structured data. */
export function buildOrganizationJsonLd(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  };
}
