import { expect, test } from "@playwright/test"

test.describe("Front Page", () => {
  test("should display the correct title and features", async ({ page }) => {
    // Go to the front page
    await page.goto("/")

    // Check the title
    const title = page.locator("h1")
    await expect(title).toHaveText("Where words evolve")

    // Check the features
    const features = page.locator("#features h3")
    await expect(features).toHaveText([
      "Next.js 14",
      "React 18",
      "Database",
      "Components",
      "Authentication",
      "Subscriptions",
    ])

    // Check that the header is displayed correctly
    const header = page.locator("header")
    await expect(header).toBeVisible({ timeout: 10000 }) // Increase timeout to 10 seconds
    // Check that the footer is displayed correctly
    const footer = page.locator("footer")
    await expect(footer).toBeVisible()
  })

  test("should navigate to the correct pages", async ({ page }) => {
    // Go to the front page
    await page.goto("/")

    await page.getByRole("link", { name: "Features" }).click()
    await page.waitForURL("**/#features")
    await expect(page).toHaveURL("/#features")

    // Go to the front page
    await page.goto("/")

    // Check that clicking "pricing" navigates to the "Pricing" section
    await page.getByRole("link", { name: "Pricing" }).click()
    await page.waitForURL("**/pricing")
    await expect(page).toHaveURL("/pricing")

    // Go back to the front page
    await page.goto("/")

    // Check that clicking Get Started takes you to the registration page
    await page.click("text=Get Started")
    await page.waitForURL("**/register")
    await expect(page).toHaveURL("/register")
  })
})
