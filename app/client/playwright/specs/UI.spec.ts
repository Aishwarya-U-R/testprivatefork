import { expect, test } from "@playwright/test";
import { testDataConfig } from "../TestdataConfig";
//import { page } from "../../test-setup";

test.describe("Starting with Playwright", () => {
  test("Create & Rename workspace", async ({ page, context }) => {

    // Network interception
    // await context.route("**/*", async (route) => {
    //   const request = route.request();
    //   // if (request.url().includes("/api/v1/workspaces")) {
    //   //   const response = await request.response();
    //   //   const responseBody = await response?.json();
    //   //   console.log(responseBody);
    //   // }
    //   await route.continue();
    // });

    await page.goto("/applications", {
      waitUntil: "load",
    });
    // await page.waitForTimeout(5000);

    await page
      .getByPlaceholder("Enter your email address")
      .fill(testDataConfig.username);
    await page
      .getByPlaceholder("Enter your password")
      .fill(testDataConfig.password);
    await page.getByRole("button", { name: "Sign in" }).click();
    // Wait for the new page navigation to complete
    // Perform actions on the new page
    await page.waitForLoadState();
    //await page.locator("a").filter({ hasText: "New workspace" }).click();

    const locator = page.locator("a").filter({ hasText: "New workspace" });
    await locator.waitFor({ state: "visible" });
    await page.waitForTimeout(500); // Wait for 500 milliseconds (adjust the value as needed)
    await locator.click();
    // (await page.waitForSelector('a:has-text("New workspace")')).click();
    await page.waitForTimeout(1000); // Wait for 500 milliseconds (adjust the value as needed)
    //await page.waitForRequest("/api/v1/workspaces");

    // const element = await page.$("a");
    // await element.is;
  });
});
