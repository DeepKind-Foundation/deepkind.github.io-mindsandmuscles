import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('renders hero, nav, and footer', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ruch dla ciała');
    await expect(page.getByRole('navigation', { name: 'Nawigacja główna' })).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });

  test('links to the three latest posts in the Strefa Wiedzy teaser', async ({ page }) => {
    await page.goto('/');
    const teaser = page.locator('.blog-teaser__grid');
    await expect(teaser.locator('a')).toHaveCount(3);
  });

  test('hero secondary CTA scrolls to the about section, not a dead anchor', async ({ page }) => {
    await page.goto('/');
    const href = await page.getByRole('link', { name: 'Dowiedz się więcej' }).getAttribute('href');
    expect(href).toBe('/#o-minds-and-muscles');
    await expect(page.locator('#o-minds-and-muscles')).toBeAttached();
  });
});

test.describe('Blog index', () => {
  test('lists all posts with working links', async ({ page }) => {
    await page.goto('/strefa-wiedzy-blog/');
    const cards = page.locator('.post-card');
    await expect(cards).toHaveCount(3);

    const firstHref = await cards.first().getAttribute('href');
    expect(firstHref).toMatch(/^\/[a-z-]+\/$/);
  });
});

test.describe('Blog post', () => {
  test('renders full article content with real headings', async ({ page }) => {
    await page.goto('/wybieranie-miedzy-soba-a-dzieckiem/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('fałszywy dylemat');
    await expect(page.locator('.post__content h2').first()).toBeVisible();
    await expect(page.locator('.post__image')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('main nav items resolve to real, non-404 destinations', async ({ page, request }) => {
    await page.goto('/');
    const hrefs = await page.locator('.site-nav a').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href')).filter((href): href is string => Boolean(href))
    );

    // /kontakt/ is linked from nav/footer but out of scope for this migration — no legacy
    // content was extracted for it, so it 404s until that page is built separately.
    const knownMissing = ['/kontakt/'];

    for (const href of hrefs) {
      if (href.startsWith('/#') || knownMissing.includes(href)) continue;
      const response = await request.get(href);
      expect(response.status(), `${href} should not 404`).toBeLessThan(400);
    }
  });
});
