# Unit Tests for index.html

This directory contains comprehensive unit tests for the `index.html` file of Apurv Sibal's personal website.

## Test Files

### 1. `index.test.js` - Jest-based Unit Tests

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

### 2. `index-browser.test.html` - Browser-based Tests

A standalone HTML file that can be opened directly in a browser to run tests without requiring Node.js or npm.

**To run these tests:**
1. Open `tests/index-browser.test.html` in your web browser
2. The tests will run automatically and display results
3. Green results indicate passing tests, red results indicate failures

## Test Coverage

The tests cover the following aspects of the `index.html` file:

### Structure Tests
- ✅ Proper DOCTYPE declaration
- ✅ HTML element with correct lang attribute
- ✅ Required meta tags (charset, viewport)
- ✅ Correct page title

### Content Tests
- ✅ Header with name and professional title
- ✅ About section with professional summary
- ✅ Three job experiences in chronological order
- ✅ Skills organized in three categories
- ✅ Education section with MBA and BS degrees
- ✅ Professional certifications list
- ✅ Blog posts with correct links
- ✅ Newsletter subscription form
- ✅ Footer with social links and copyright

### Functionality Tests
- ✅ Newsletter form has proper action and method
- ✅ Email input has required attribute
- ✅ Social links have correct URLs and targets
- ✅ Blog post links point to correct files

## Test Results Example

When running the Jest tests, you should see output similar to:

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

## Adding New Tests

To add new tests:

1. **For Jest tests**: Add new test cases to `index.test.js` following the existing pattern
2. **For browser tests**: Add new test cases to the `index-browser.test.html` file using the `runner.test()` method

## Continuous Integration

These tests can be integrated into a CI/CD pipeline by:
1. Adding the test command to your GitHub Actions workflow
2. Running `npm test` as part of your build process
3. Using the browser tests for manual verification during development

## Maintenance

When updating `index.html`, make sure to:
1. Update corresponding tests if structure or content changes
2. Run tests to ensure no regressions
3. Add new tests for any new functionality or content sections