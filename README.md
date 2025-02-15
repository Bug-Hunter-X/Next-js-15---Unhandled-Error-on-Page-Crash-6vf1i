# Next.js 15 Unhandled Error Example

This repository demonstrates an example of an unhandled error in a Next.js 15 application causing a crash.  The `pages/about.js` file intentionally throws an error, showcasing the issue.

## Problem
The application crashes if the error in `pages/about.js` is not handled gracefully. This could lead to a bad user experience.

## Solution
The solution involves implementing proper error handling.  This can be achieved through several methods including using a `try...catch` block and custom error boundaries to avoid the app crash and providing better feedback.