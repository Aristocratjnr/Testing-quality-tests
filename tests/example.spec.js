// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigator Dev Site Tests', () => {
  test('has title', async ({ page }) => {
    // Log request and response details
    page.on('request', request => {
      console.log(`Request: ${request.method()} ${request.url()}`);
    });
    page.on('response', response => {
      console.log(`Response: ${response.status()} ${response.url()}`);
    });
    page.on('requestfailed', request => {
      console.log(`Request failed: ${request.url()} - ${request.failure()?.errorText}`);
    });

    // Try to navigate to the URL with increased timeout and ignore HTTPS errors
    await page.goto('https://navigator-dev.inkris.ca', { timeout: 60000, waitUntil: 'domcontentloaded' });

    // Expect the title to contain a substring specific to the new site
    await expect(page).toHaveTitle(/Navigator/); // Adjust the substring according to the actual title of the site
  });

  test('get started link', async ({ page }) => {
    // Log request and response details
    page.on('request', request => {
      console.log(`Request: ${request.method()} ${request.url()}`);
    });
    page.on('response', response => {
      console.log(`Response: ${response.status()} ${response.url()}`);
    });
    page.on('requestfailed', request => {
      console.log(`Request failed: ${request.url()} - ${request.failure()?.errorText}`);
    });

    // Try to navigate to the URL with increased timeout and ignore HTTPS errors
    await page.goto('https://navigator-dev.inkris.ca', { timeout: 60000, waitUntil: 'domcontentloaded' });

    // Click the get started link. Adjust the selector based on the actual site content
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expect the page to have a heading with the name of Installation. Adjust according to the actual content
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible(); // Modify 'Installation' as per the actual heading name
  });
});
