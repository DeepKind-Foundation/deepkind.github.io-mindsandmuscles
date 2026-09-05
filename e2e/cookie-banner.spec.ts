import { test, expect } from '@playwright/test';

test.describe('Cookie consent banner', () => {
  test('shows on first visit and never fires a request to Google before consent', async ({ page }) => {
    const googleRequests: string[] = [];
    page.on('request', (req) => {
      if (req.url().includes('googletagmanager.com')) googleRequests.push(req.url());
    });

    await page.goto('/');
    await expect(page.getByRole('region', { name: 'Informacja o plikach cookies' })).toBeVisible();
    expect(googleRequests).toHaveLength(0);
  });

  test('declining hides the banner, persists across reload, and never fires a request', async ({ page }) => {
    const googleRequests: string[] = [];
    page.on('request', (req) => {
      if (req.url().includes('googletagmanager.com')) googleRequests.push(req.url());
    });

    await page.goto('/');
    await page.getByRole('button', { name: 'Nie, dziękuję' }).click();
    await expect(page.getByRole('region', { name: 'Informacja o plikach cookies' })).toBeHidden();

    await page.reload();
    await expect(page.getByRole('region', { name: 'Informacja o plikach cookies' })).toBeHidden();
    expect(googleRequests).toHaveLength(0);
  });

  test('accepting hides the banner and persists across reload', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Akceptuję' }).click();
    await expect(page.getByRole('region', { name: 'Informacja o plikach cookies' })).toBeHidden();

    await page.reload();
    await expect(page.getByRole('region', { name: 'Informacja o plikach cookies' })).toBeHidden();
  });

  test('no gtag script tag exists unconditionally in the page source', async ({ page }) => {
    await page.goto('/');
    const html = await page.content();
    expect(html).not.toMatch(/<script[^>]*src="https:\/\/www\.googletagmanager\.com/);
  });
});
