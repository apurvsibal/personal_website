# Unit Tests for Personal Website

This directory contains comprehensive unit tests for Apurv Sibal's personal website, including tests for `index.html` and `blog1.html`.

## Overview

The test suite includes both Jest-based unit tests (for automated testing) and browser-based tests (for manual verification). Each HTML file has its own set of comprehensive tests covering structure, content, functionality, and accessibility.

## Test Files

### Index.html Tests

#### 1. `index.test.js` - Jest-based Unit Tests for Homepage

Comprehensive test suite for the main homepage using Jest and jsdom.

#### 2. `index-browser.test.html` - Browser-based Tests for Homepage

Standalone HTML file for testing the homepage directly in a browser.

### Blog1.html Tests

#### 3. `blog1.test.js` - Jest-based Unit Tests for Blog Post

Comprehensive test suite for the "Welcome to My Blog Journey" blog post using Jest and jsdom.

#### 4. `blog1-browser.test.html` - Browser-based Tests for Blog Post

Standalone HTML file for testing the blog post directly in a browser.

## Detailed Test Information

### Index.html Tests

#### `index.test.js` - Jest-based Unit Tests

A comprehensive test suite using Jest and jsdom for testing the HTML structure, content, and functionality.

**Features tested:**
- HTML structure and meta tags
- Header section content
- About section
- Professional experience entries
- Skills and expertise categories
- Education and certifications
- Blog posts and links
- Newsletter subscription form
- Footer and social links

**To run these tests:**

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

#### `index-browser.test.html` - Browser-based Tests

A standalone HTML file that can be opened directly in a browser to run tests without requiring Node.js or npm.

**To run these tests:**
1. Open `tests/index-browser.test.html` in your web browser
2. The tests will run automatically and display results
3. Green results indicate passing tests, red results indicate failures

### Blog1.html Tests

#### `blog1.test.js` - Jest-based Unit Tests

A comprehensive test suite using Jest and jsdom for testing the blog post structure, content, and functionality.

**Features tested:**
- HTML structure and meta tags
- Header section with back navigation
- Blog post title and meta information
- Main content sections and hierarchy
- List of future topics
- Newsletter subscription mentions
- Footer and copyright
- CSS styling and responsive design
- Accessibility and semantic HTML
- Content validation and professional information

#### `blog1-browser.test.html` - Browser-based Tests

A standalone HTML file that can be opened directly in a browser to test the blog post without requiring Node.js or npm.

**To run these tests:**
1. Open `tests/blog1-browser.test.html` in your web browser
2. The tests will run automatically and display results
3. Green results indicate passing tests, red results indicate failures

## Running All Tests

**To run all Jest tests:**

```bash
# Install dependencies
npm install

# Run all tests (both index.html and blog1.html)
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## Test Coverage

The tests cover the following aspects of both HTML files:

### Index.html Test Coverage

#### Structure Tests
- ✅ Proper DOCTYPE declaration
- ✅ HTML element with correct lang attribute
- ✅ Required meta tags (charset, viewport)
- ✅ Correct page title

#### Content Tests
- ✅ Header with name and professional title
- ✅ About section with professional summary
- ✅ Three job experiences in chronological order
- ✅ Skills organized in three categories
- ✅ Education section with MBA and BS degrees
- ✅ Professional certifications list
- ✅ Blog posts with correct links
- ✅ Newsletter subscription form
- ✅ Footer with social links and copyright

#### Functionality Tests
- ✅ Newsletter form has proper action and method
- ✅ Email input has required attribute
- ✅ Social links have correct URLs and targets
- ✅ Blog post links point to correct files

### Blog1.html Test Coverage

#### Structure Tests
- ✅ Proper DOCTYPE declaration
- ✅ HTML element with correct lang attribute
- ✅ Required meta tags (charset, viewport)
- ✅ Correct page title with blog post name

#### Content Tests
- ✅ Header with back navigation link
- ✅ Blog post title and meta information
- ✅ Introductory paragraph with professional context
- ✅ "What You Can Expect" section with topic list
- ✅ "Stay Connected" section with newsletter mention
- ✅ Closing thank you message
- ✅ Footer with copyright information

#### Functionality Tests
- ✅ Back link points to index.html
- ✅ Proper heading hierarchy (h1, h3)
- ✅ Semantic HTML structure (header, main, footer)
- ✅ CSS styling and responsive design
- ✅ Professional information consistency

#### Accessibility Tests
- ✅ Proper semantic HTML elements
- ✅ Clear navigation structure
- ✅ Consistent author branding

## Test Results Example

When running the Jest tests for index.html, you should see output similar to:

```
PASS tests/index.test.js
  Index.html Unit Tests
    HTML Structure and Meta Tags
      ✓ should have proper DOCTYPE declaration
      ✓ should have html element with lang attribute
      ✓ should have proper meta tags
      ✓ should have proper title
    Header Section
      ✓ should have header with name and title
    ...
```

When running the Jest tests for blog1.html, you should see output similar to:

```
PASS tests/blog1.test.js
  Blog1.html Unit Tests
    HTML Structure and Meta Tags
      ✓ should have proper DOCTYPE declaration
      ✓ should have html element with lang attribute
      ✓ should have proper meta tags
      ✓ should have proper title
    Header Section
      ✓ should have header with back link
      ✓ should have proper blog post title
    ...
```

When running the Jest tests for blog2.html, you should see output similar to:

```
PASS tests/blog2.test.js
  Blog2.html Unit Tests
    HTML Structure and Meta Tags
      ✓ should have proper DOCTYPE declaration
      ✓ should have html element with lang attribute
      ✓ should have proper meta tags
      ✓ should have proper title
    ...
```

## Adding New Tests

To add new tests:

1. **For Jest tests**: Add new test cases to the appropriate `.test.js` file following the existing pattern
2. **For browser tests**: Add new test cases to the appropriate browser test HTML file using the `runner.test()` method

## Continuous Integration

These tests can be integrated into a CI/CD pipeline by:
1. Adding the test command to your GitHub Actions workflow
2. Running `npm test` as part of your build process
3. Using the browser tests for manual verification during development

## Maintenance

When updating any HTML files, make sure to:
1. Update corresponding tests if structure or content changes
2. Run tests to ensure no regressions
3. Add new tests for any new functionality or content sections
4. Create new test files for new HTML pages following the established patterns
