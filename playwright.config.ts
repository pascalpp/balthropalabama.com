import { defineConfig, devices } from '@playwright/test';

const ciBaseURL = 'http://localhost:4173';
const productionBaseURL = 'https://www.balthropalabama.com';
const developmentBaseURL = 'https://balthropalabama.localhost';
const localBaseURL = process.env.PRODUCTION ? productionBaseURL : developmentBaseURL;
const baseURL = process.env.CI ? ciBaseURL : localBaseURL;

export default defineConfig({
  webServer: process.env.CI
    ? {
        command: 'npm run build && npm run preview',
        port: 4173,
      }
    : undefined,
  testDir: 'tests',

  use: {
    baseURL,
  },

  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], deviceScaleFactor: 2 },
    },
    {
      name: 'safari',
      use: { ...devices['Desktop Safari'], deviceScaleFactor: 2 },
    },
  ],
});
