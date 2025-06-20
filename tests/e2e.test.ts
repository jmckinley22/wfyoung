import { test, expect, Page } from '@playwright/test'

test.describe('Navigation Tests', () => {
  test('should navigate through all pages', async ({ page }: { page: Page }) => {
    // Start from homepage
    await page.goto('http://localhost:3001')
    await expect(page.locator('h1')).toContainText('Healthier Animals')

    // Test navigation to Equine page
    await page.click('text=Equine')
    await expect(page).toHaveURL(/.*\/equine/)
    await expect(page.locator('h1')).toContainText('Equine Products')

    // Test navigation to Pets page
    await page.click('text=Pet Care')
    await expect(page).toHaveURL(/.*\/pets/)
    await expect(page.locator('h1')).toContainText('Pet Care Products')

    // Test navigation to Contact page
    await page.click('text=Contact')
    await expect(page).toHaveURL(/.*\/contact/)
    await expect(page.locator('h1')).toContainText('Contact Us')

    // Test navigation back to home
    await page.click('text=W.F. Young')
    await expect(page).toHaveURL('http://localhost:3001')
  })

  test('should display all product categories', async ({ page }: { page: Page }) => {
    // Check Equine page categories
    await page.goto('http://localhost:3001/equine')
    const equineCategories = [
      'Grooming & Coat Care',
      'Hoof Care',
      'Joint & Muscle Support',
      'First Aid & Wound Care',
      'Senior Care',
      'Performance Support'
    ]
    for (const category of equineCategories) {
      await expect(page.locator(`h3:has-text("${category}")`)).toBeVisible()
    }

    // Check Pet page categories
    await page.goto('http://localhost:3001/pets')
    const petCategories = [
      'Dental Health',
      'Digestive Health',
      'Hip & Joint',
      'Life Stages',
      'Skin & Coat',
      'Special Diets'
    ]
    for (const category of petCategories) {
      await expect(page.locator(`h3:has-text("${category}")`)).toBeVisible()
    }
  })

  test('should test contact form submission', async ({ page }: { page: Page }) => {
    await page.goto('http://localhost:3001/contact')
    
    // Fill out contact form
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="subject"]', 'Test Subject')
    await page.fill('textarea[name="message"]', 'This is a test message')
    
    // Submit form and intercept console.log
    const messages: string[] = []
    page.on('console', msg => messages.push(msg.text()))
    
    await page.click('button[type="submit"]')
    
    // Wait for console.log message
    await expect.poll(() => messages).toContainEqual(expect.stringContaining('Form submitted:'))
  })
}) 