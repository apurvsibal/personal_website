/**
 * Unit tests for blog1.html
 * Tests the structure, content, and functionality of the "Welcome to My Blog Journey" blog post
 */

const fs = require('fs');
const path = require('path');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../blog1.html'), 'utf8');

describe('Blog1.html Unit Tests', () => {
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
      expect(title.textContent).toBe('Welcome to My Blog Journey - Apurv Sibal');
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
      expect(h1.textContent).toBe('Welcome to My Blog Journey');
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

    test('should have introductory paragraph', () => {
      const content = document.querySelector('.content');
      const firstParagraph = content.querySelector('p');

      expect(firstParagraph).toBeTruthy();
      expect(firstParagraph.textContent).toContain('This is my first blog post');
      expect(firstParagraph.textContent).toContain('Senior Product Manager at AWS');
    });

    test('should have "What You Can Expect" section', () => {
      const content = document.querySelector('.content');
      const headings = content.querySelectorAll('h3');
      const expectationHeading = Array.from(headings).find(h => h.textContent === 'What You Can Expect');

      expect(expectationHeading).toBeTruthy();
    });

    test('should have list of future topics', () => {
      const content = document.querySelector('.content');
      const list = content.querySelector('ul');
      const listItems = list.querySelectorAll('li');

      expect(list).toBeTruthy();
      expect(listItems.length).toBe(4);
      
      const expectedTopics = [
        'AI trends and their impact on product development',
        'Product management best practices',
        'Career insights and professional growth',
        'Personal reflections and life lessons'
      ];

      listItems.forEach((item, index) => {
        expect(item.textContent).toBe(expectedTopics[index]);
      });
    });

    test('should have "Stay Connected" section', () => {
      const content = document.querySelector('.content');
      const headings = content.querySelectorAll('h3');
      const stayConnectedHeading = Array.from(headings).find(h => h.textContent === 'Stay Connected');

      expect(stayConnectedHeading).toBeTruthy();
    });

    test('should mention newsletter subscription', () => {
      const content = document.querySelector('.content');
      const paragraphs = content.querySelectorAll('p');
      const newsletterParagraph = Array.from(paragraphs).find(p => 
        p.textContent.includes('newsletter')
      );

      expect(newsletterParagraph).toBeTruthy();
      expect(newsletterParagraph.textContent).toContain('subscribe to my newsletter');
    });

    test('should have closing thank you message', () => {
      const content = document.querySelector('.content');
      const paragraphs = content.querySelectorAll('p');
      const lastParagraph = paragraphs[paragraphs.length - 1];

      expect(lastParagraph.textContent).toContain('Thank you for visiting');
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
  });

  describe('Content Structure and Hierarchy', () => {
    test('should have proper heading hierarchy', () => {
      const h1 = document.querySelector('h1');
      const h3Elements = document.querySelectorAll('h3');

      expect(h1).toBeTruthy();
      expect(h3Elements.length).toBe(2);
      
      // Should not have h2 elements in content (only h1 and h3)
      const h2Elements = document.querySelectorAll('h2');
      expect(h2Elements.length).toBe(0);
    });

    test('should have proper content flow', () => {
      const content = document.querySelector('.content');
      const children = Array.from(content.children);

      // First element should be a paragraph
      expect(children[0].tagName).toBe('P');
      
      // Should have alternating structure of headings and content
      const h3Elements = children.filter(el => el.tagName === 'H3');
      expect(h3Elements.length).toBe(2);
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
    test('should contain key professional information', () => {
      const content = document.querySelector('.content');
      const textContent = content.textContent;

      expect(textContent).toContain('Senior Product Manager at AWS');
      expect(textContent).toContain('AI');
      expect(textContent).toContain('product management');
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

  describe('Navigation and User Experience', () => {
    test('should provide clear navigation back to home', () => {
      const backLink = document.querySelector('.back-link');
      expect(backLink).toBeTruthy();
      expect(backLink.textContent).toBe('Back to Home');
      expect(backLink.getAttribute('href')).toBe('index.html');
    });

    test('should encourage newsletter subscription', () => {
      const content = document.querySelector('.content');
      const textContent = content.textContent.toLowerCase();
      expect(textContent).toContain('newsletter');
      expect(textContent).toContain('subscribe');
    });
  });
});
