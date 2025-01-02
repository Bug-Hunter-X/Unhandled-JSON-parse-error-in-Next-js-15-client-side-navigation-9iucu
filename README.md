# Unhandled JSON.parse error in Next.js 15 Client-Side Navigation

This repository demonstrates a common error in Next.js 15 applications where accessing `localStorage` directly within a page component during client-side navigation can lead to unhandled exceptions if the stored data is not valid JSON.

## Problem

Accessing `localStorage` in a Next.js 15 page component during client-side navigation (e.g., using Next/Link) might result in an unhandled `JSON.parse` error if the data stored in `localStorage` is not valid JSON. This causes the page to crash without providing the user with any helpful error messages.

## Solution

The solution involves using a try-catch block to safely handle the `JSON.parse` operation and provide graceful fallback behavior, preventing the application from crashing.

## How to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
   - If `localStorage` is empty, it will gracefully display "Please login."
   - Try setting `localStorage.setItem('user', 'invalid json')` and then navigating to `/about` to see the original error.
   - The solution version won't throw an error, but handle the invalid JSON gracefully.