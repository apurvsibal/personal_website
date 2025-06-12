/**
 * Unit tests for blog2.html
 * Tests the structure, content, and functionality of "The Approaching Singularity: Reflections on Sam Altman's Vision" blog post
 */

const fs = require('fs');
const path = require('path');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../blog2.html'), 'utf8');

describe('Blog2.html Unit Tests', () => {
  let document;

  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  describe('HTML Structure and Meta Tags', () => {
    test('should have proper DOCTYPE declaration', () => {
      expect(html).toMatch(/^<!DOCTYPE html>/i);
    });

    test('should have html element with lang attribute', () => {
      const htmlElement = document.querySelector('html');
      expect(htmlElement).toBeTruthy();
      expect(htmlElement.getAttribute('lang')).toBe('en');
    });

    test('should have proper meta tags', () => {
      const charset = document.querySelector('meta[charset]');
      const viewport = document.querySelector('meta[name="viewport"]');
      
      expect(charset).toBeTruthy();
      expect(charset.getAttribute('charset')).toBe('UTF-8');
      expect(viewport).toBeTruthy();
      expect(viewport.getAttribute('content')).toBe('width=device-width, initial-scale=1.0');
    });

    test('should have proper title', () => {
      const title = document.querySelector('title');
      expect(title).toBeTruthy();
      expect(title.textContent).toBe('The Approaching Singularity: Reflections on Sam Altman\'s Vision - Apurv Sibal');
    });
  });

  describe('Header Section', () => {
    test('should have header with back link', () => {
      const header = document.querySelector('header');
      const backLink = header.querySelector('.back-link');

      expect(header).toBeTruthy();
      expect(backLink).toBeTruthy();
      expect(backLink.getAttribute('href')).toBe('index.html');
      expect(backLink.textContent).toBe('Back to Home');
    });

    test('should have proper blog post title', () => {
      const header = document.querySelector('header');
      const h1 = header.querySelector('h1');

      expect(h1).toBeTruthy();
      expect(h1.textContent).toBe('The Approaching Singularity: Reflections on Sam Altman\'s Vision');
    });

    test('should have meta information with date and author', () => {
      const meta = document.querySelector('.meta');
      expect(meta).toBeTruthy();
      expect(meta.textContent).toContain('June 11, 2025');
      expect(meta.textContent).toContain('Apurv Sibal');
    });
  });

  describe('Main Content Section', () => {
    test('should have main content area', () => {
      const main = document.querySelector('main');
      const content = main.querySelector('.content');

      expect(main).toBeTruthy();
      expect(content).toBeTruthy();
    });

    test('should have "The Intelligence Age is Upon Us" section', () => {
      const content = document.querySelector('.content');
      const h2Elements = content.querySelectorAll('h2');
      const intelligenceAgeHeading = Array.from(h2Elements).find(h => h.textContent === 'The Intelligence Age is Upon Us');

      expect(intelligenceAgeHeading).toBeTruthy();
    });

    test('should have introductory paragraph about Sam Altman', () => {
      const content = document.querySelector('.content');
      const firstParagraph = content.querySelector('p');

      expect(firstParagraph).toBeTruthy();
      expect(firstParagraph.textContent).toContain('Sam Altman\'s recent reflections');
      expect(firstParagraph.textContent).toContain('technological singularity');
      expect(firstParagraph.textContent).toContain('AWS');
    });

    test('should have quote section', () => {
      const content = document.querySelector('.content');
      const quote = content.querySelector('.quote');

      expect(quote).toBeTruthy();
      expect(quote.textContent).toContain('Intelligence Age');
      expect(quote.textContent).toContain('AI systems');
    });

    test('should have "What the Singularity Means for Product Development" section', () => {
      const content = document.querySelector('.content');
      const h3Elements = content.querySelectorAll('h3');
      const productDevHeading = Array.from(h3Elements).find(h => h.textContent === 'What the Singularity Means for Product Development');

      expect(productDevHeading).toBeTruthy();
    });

    test('should have list of key insights', () => {
      const content = document.querySelector('.content');
      const list = content.querySelector('ul');
      const listItems = list.querySelectorAll('li');

      expect(list).toBeTruthy();
      expect(listItems.length).toBe(3);
      
      const expectedInsights = [
        'Acceleration is Non-Linear',
        'Democratization of Intelligence',
        'New Economic Paradigms'
      ];

      listItems.forEach((item, index) => {
        expect(item.textContent).toContain(expectedInsights[index]);
      });
    });

    test('should have "Preparing for the Transition" section', () => {
      const content = document.querySelector('.content');
      const h3Elements = content.querySelectorAll('h3');
      const preparingHeading = Array.from(h3Elements).find(h => h.textContent === 'Preparing for the Transition');

      expect(preparingHeading).toBeTruthy();
    });

    test('should have "The Human Element" section', () => {
      const content = document.querySelector('.content');
      const h3Elements = content.querySelectorAll('h3');
      const humanElementHeading = Array.from(h3Elements).find(h => h.textContent === 'The Human Element');

      expect(humanElementHeading).toBeTruthy();
    });

    test('should mention AWS and product decisions', () => {
      const content = document.querySelector('.content');
      const textContent = content.textContent;

      expect(textContent).toContain('AWS');
      expect(textContent).toContain('product decision');
    });

    test('should have closing question about readiness', () => {
      const content = document.querySelector('.content');
      const paragraphs = content.querySelectorAll('p');
      const lastParagraph = paragraphs[paragraphs.length - 1];

      expect(lastParagraph.textContent).toContain('are we ready to embrace it responsibly');
    });
  });

  describe('Footer Section', () => {
    test('should have footer with copyright', () => {
      const footer = document.querySelector('footer');
      const copyright = footer.querySelector('p');

      expect(footer).toBeTruthy();
      expect(copyright).toBeTruthy();
      expect(copyright.textContent).toBe('© 2025 Apurv Sibal');
    });
  });

  describe('CSS Styling', () => {
    test('should have embedded CSS styles', () => {
      const styleTag = document.querySelector('style');
      expect(styleTag).toBeTruthy();
      expect(styleTag.textContent).toContain('font-family');
      expect(styleTag.textContent).toContain('.container');
      expect(styleTag.textContent).toContain('.back-link');
    });

    test('should have responsive design media queries', () => {
      const styleTag = document.querySelector('style');
      expect(styleTag.textContent).toContain('@media (max-width: 768px)');
    });

    test('should have back link arrow styling', () => {
      const styleTag = document.querySelector('style');
      expect(styleTag.textContent).toContain('.back-link::before');
      expect(styleTag.textContent).toContain('content: "← "');
    });

    test('should have quote styling', () => {
      const styleTag = document.querySelector('style');
      expect(styleTag.textContent).toContain('.quote');
      expect(styleTag.textContent).toContain('border-left');
      expect(styleTag.textContent).toContain('font-style: italic');
    });
  });

  describe('Content Structure and Hierarchy', () => {
    test('should have proper heading hierarchy', () => {
      const h1 = document.querySelector('h1');
      const h2Elements = document.querySelectorAll('h2');
      const h3Elements = document.querySelectorAll('h3');

      expect(h1).toBeTruthy();
      expect(h2Elements.length).toBe(1);
      expect(h3Elements.length).toBe(3);
    });

    test('should have proper content flow', () => {
      const content = document.querySelector('.content');
      const children = Array.from(content.children);

      // First element should be h2
      expect(children[0].tagName).toBe('H2');
      
      // Should have proper structure with headings and content
      const h2Elements = children.filter(el => el.tagName === 'H2');
      const h3Elements = children.filter(el => el.tagName === 'H3');
      expect(h2Elements.length).toBe(1);
      expect(h3Elements.length).toBe(3);
    });
  });

  describe('Accessibility', () => {
    test('should have proper semantic HTML structure', () => {
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');

      expect(header).toBeTruthy();
      expect(main).toBeTruthy();
      expect(footer).toBeTruthy();
    });

    test('should have proper link structure for back navigation', () => {
      const backLink = document.querySelector('.back-link');
      expect(backLink.tagName).toBe('A');
      expect(backLink.getAttribute('href')).toBe('index.html');
    });
  });

  describe('Content Validation', () => {
    test('should contain key AI and singularity topics', () => {
      const content = document.querySelector('.content');
      const textContent = content.textContent;

      expect(textContent).toContain('singularity');
      expect(textContent).toContain('AI');
      expect(textContent).toContain('Intelligence Age');
      expect(textContent).toContain('Sam Altman');
    });

    test('should have consistent author branding', () => {
      const meta = document.querySelector('.meta');
      const footer = document.querySelector('footer p');

      expect(meta.textContent).toContain('Apurv Sibal');
      expect(footer.textContent).toContain('Apurv Sibal');
    });

    test('should have proper date format', () => {
      const meta = document.querySelector('.meta');
      expect(meta.textContent).toMatch(/June 11, 2025/);
    });
  });
});