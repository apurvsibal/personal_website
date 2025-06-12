/**
 * Unit tests for index.html
 * Tests the structure, content, and functionality of the personal website homepage
 */

const fs = require('fs');
const path = require('path');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Index.html Unit Tests', () => {
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
      expect(title.textContent).toBe('Apurv Sibal');
    });
  });

  describe('Header Section', () => {
    test('should have header with name and title', () => {
      const header = document.querySelector('header');
      const h1 = header.querySelector('h1');
      const subtitle = header.querySelector('p');

      expect(header).toBeTruthy();
      expect(h1).toBeTruthy();
      expect(h1.textContent).toBe('Apurv Sibal');
      expect(subtitle).toBeTruthy();
      expect(subtitle.textContent).toContain('Senior Product Manager at AWS');
    });
  });

  describe('About Section', () => {
    test('should have about section with proper content', () => {
      const aboutSection = document.querySelector('.intro');
      const aboutHeading = aboutSection.querySelector('h2');
      const aboutParagraphs = aboutSection.querySelectorAll('p');

      expect(aboutSection).toBeTruthy();
      expect(aboutHeading.textContent).toBe('About');
      expect(aboutParagraphs.length).toBeGreaterThan(0);
      expect(aboutParagraphs[0].textContent).toContain('Senior Product Manager at Amazon Web Services');
    });
  });

  describe('Professional Experience Section', () => {
    test('should have experience section with job entries', () => {
      const experienceSection = document.querySelector('.experience');
      const experienceHeading = experienceSection.querySelector('h2');
      const jobs = experienceSection.querySelectorAll('.job');

      expect(experienceSection).toBeTruthy();
      expect(experienceHeading.textContent).toBe('Professional Experience');
      expect(jobs.length).toBe(3);
    });

    test('should have AWS job as current position', () => {
      const jobs = document.querySelectorAll('.job');
      const awsJob = jobs[0];
      const jobTitle = awsJob.querySelector('h3');
      const company = awsJob.querySelector('.company');
      const period = awsJob.querySelector('.period');

      expect(jobTitle.textContent).toBe('Senior Product Manager');
      expect(company.textContent).toBe('Amazon Web Services (AWS)');
      expect(period.textContent).toBe('2021 - Present');
    });

    test('should have Microsoft Azure job as previous position', () => {
      const jobs = document.querySelectorAll('.job');
      const microsoftJob = jobs[1];
      const jobTitle = microsoftJob.querySelector('h3');
      const company = microsoftJob.querySelector('.company');
      const period = microsoftJob.querySelector('.period');

      expect(jobTitle.textContent).toBe('Product Manager');
      expect(company.textContent).toBe('Microsoft Azure');
      expect(period.textContent).toBe('2019 - 2021');
    });

    test('should have Google Cloud job as earliest position', () => {
      const jobs = document.querySelectorAll('.job');
      const googleJob = jobs[2];
      const jobTitle = googleJob.querySelector('h3');
      const company = googleJob.querySelector('.company');
      const period = googleJob.querySelector('.period');

      expect(jobTitle.textContent).toBe('Associate Product Manager');
      expect(company.textContent).toBe('Google Cloud Platform');
      expect(period.textContent).toBe('2017 - 2019');
    });
  });

  describe('Skills Section', () => {
    test('should have skills section with skill categories', () => {
      const skillsSection = document.querySelector('.skills');
      const skillsHeading = skillsSection.querySelector('h2');
      const skillCategories = skillsSection.querySelectorAll('.skill-category');

      expect(skillsSection).toBeTruthy();
      expect(skillsHeading.textContent).toBe('Skills & Expertise');
      expect(skillCategories.length).toBe(3);
    });

    test('should have Product Management skills category', () => {
      const skillCategories = document.querySelectorAll('.skill-category');
      const productMgmtCategory = skillCategories[0];
      const categoryTitle = productMgmtCategory.querySelector('h3');
      const skills = productMgmtCategory.querySelectorAll('li');

      expect(categoryTitle.textContent).toBe('Product Management');
      expect(skills.length).toBeGreaterThan(0);
    });
  });

  describe('Education Section', () => {
    test('should have education section with degrees and certifications', () => {
      const educationSection = document.querySelector('.education');
      const educationHeading = educationSection.querySelector('h2');
      const educationItems = educationSection.querySelectorAll('.education-item');
      const certifications = educationSection.querySelector('.certifications');

      expect(educationSection).toBeTruthy();
      expect(educationHeading.textContent).toBe('Education & Certifications');
      expect(educationItems.length).toBe(2);
      expect(certifications).toBeTruthy();
    });

    test('should have MBA from Stanford', () => {
      const educationItems = document.querySelectorAll('.education-item');
      const mbaItem = educationItems[0];
      const degree = mbaItem.querySelector('h3');
      const institution = mbaItem.querySelector('.institution');

      expect(degree.textContent).toBe('Master of Business Administration (MBA)');
      expect(institution.textContent).toBe('Stanford Graduate School of Business');
    });

    test('should have BS from UC Berkeley', () => {
      const educationItems = document.querySelectorAll('.education-item');
      const bsItem = educationItems[1];
      const degree = bsItem.querySelector('h3');
      const institution = bsItem.querySelector('.institution');

      expect(degree.textContent).toBe('Bachelor of Science in Computer Science');
      expect(institution.textContent).toBe('University of California, Berkeley');
    });
  });

  describe('Blog Posts Section', () => {
    test('should have recent posts section', () => {
      const postsSection = document.querySelector('.posts');
      const postsHeading = postsSection.querySelector('h2');
      const posts = postsSection.querySelectorAll('.post');

      expect(postsSection).toBeTruthy();
      expect(postsHeading.textContent).toBe('Recent Posts');
      expect(posts.length).toBe(2);
    });

    test('should have blog post links', () => {
      const posts = document.querySelectorAll('.post');
      const firstPost = posts[0];
      const secondPost = posts[1];
      const firstPostLink = firstPost.querySelector('a');
      const secondPostLink = secondPost.querySelector('a');

      expect(firstPostLink.getAttribute('href')).toBe('blog2.html');
      expect(secondPostLink.getAttribute('href')).toBe('blog1.html');
    });
  });

  describe('Newsletter Section', () => {
    test('should have newsletter subscription form', () => {
      const newsletterSection = document.querySelector('.newsletter');
      const form = newsletterSection.querySelector('form');
      const emailInput = form.querySelector('input[type="email"]');
      const submitButton = form.querySelector('button[type="submit"]');

      expect(newsletterSection).toBeTruthy();
      expect(form).toBeTruthy();
      expect(form.getAttribute('action')).toBe('https://formspree.io/f/xzzprann');
      expect(form.getAttribute('method')).toBe('POST');
      expect(emailInput).toBeTruthy();
      expect(emailInput.getAttribute('required')).toBe('');
      expect(submitButton).toBeTruthy();
      expect(submitButton.textContent).toBe('Subscribe');
    });
  });

  describe('Footer Section', () => {
    test('should have footer with social links and copyright', () => {
      const footer = document.querySelector('footer');
      const socialLinks = footer.querySelectorAll('.social-links a');
      const copyright = footer.querySelector('p');

      expect(footer).toBeTruthy();
      expect(socialLinks.length).toBe(3);
      expect(copyright.textContent).toContain('2025 Apurv Sibal');
    });

    test('should have LinkedIn link', () => {
      const linkedinLink = document.querySelector('a[href="https://linkedin.com/in/apurvsibal"]');
      expect(linkedinLink).toBeTruthy();
      expect(linkedinLink.textContent).toBe('LinkedIn');
      expect(linkedinLink.getAttribute('target')).toBe('_blank');
    });
  });
});