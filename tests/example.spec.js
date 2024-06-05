// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://navigator-dev.inkris.ca/', { timeout: 60000 }); // Increase timeout to 60 seconds

  // Expect the title to contain a substring specific to the new site.
  await expect(page).toHaveTitle(/Navigator/); // Adjust the substring according to the actual title of the site.
});

test('get started link', async ({ page }) => {
  await page.goto('https://navigator-dev.inkris.ca/', { timeout: 60000 }); // Increase timeout to 60 seconds

  // Click the get started link. Adjust the selector based on the actual site content.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expect the page to have a heading with the name of Installation. Adjust according to the actual content.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible(); // Modify 'Installation' as per the actual heading name.
});
