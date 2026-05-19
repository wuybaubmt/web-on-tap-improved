/**
 * Accessibility Utilities
 * WCAG 2.1 AA compliance helpers
 */

/**
 * Set ARIA label for element
 * @param {HTMLElement} element - Target element
 * @param {string} label - ARIA label text
 */
export function setAriaLabel(element, label) {
  if (element) {
    element.setAttribute('aria-label', label);
  }
}

/**
 * Set ARIA role
 * @param {HTMLElement} element - Target element
 * @param {string} role - ARIA role
 */
export function setAriaRole(element, role) {
  if (element) {
    element.setAttribute('role', role);
  }
}

/**
 * Set ARIA live region for dynamic updates
 * @param {HTMLElement} element - Target element
 * @param {string} politeness - 'polite' | 'assertive' | 'off'
 */
export function setAriaLive(element, politeness = 'polite') {
  if (element) {
    element.setAttribute('aria-live', politeness);
    element.setAttribute('aria-atomic', 'true');
  }
}

/**
 * Announce message to screen readers
 * @param {string} message - Message to announce
 * @param {string} politeness - 'polite' | 'assertive'
 */
export function announceToScreenReader(message, politeness = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', politeness);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only'; // Screen reader only
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => announcement.remove(), 1000);
}

/**
 * Make element focusable
 * @param {HTMLElement} element - Target element
 * @param {number} tabIndex - Tab index value
 */
export function setFocusable(element, tabIndex = 0) {
  if (element) {
    element.setAttribute('tabindex', String(tabIndex));
  }
}

/**
 * Set focus to element with announcement
 * @param {HTMLElement} element - Target element
 * @param {string} message - Optional announcement
 */
export function setFocusWithAnnouncement(element, message = '') {
  if (element) {
    element.focus();
    if (message) {
      announceToScreenReader(message);
    }
  }
}

/**
 * Disable element for accessibility
 * @param {HTMLElement} element - Target element
 * @param {boolean} disabled - Disable state
 */
export function setDisabled(element, disabled = true) {
  if (element) {
    if (disabled) {
      element.setAttribute('disabled', '');
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.removeAttribute('disabled');
      element.setAttribute('aria-disabled', 'false');
    }
  }
}

/**
 * Set button aria-pressed for toggle buttons
 * @param {HTMLElement} button - Button element
 * @param {boolean} pressed - Pressed state
 */
export function setAriaPressed(button, pressed = false) {
  if (button) {
    button.setAttribute('aria-pressed', String(pressed));
  }
}

/**
 * Announce current page number for exams
 * @param {number} current - Current question
 * @param {number} total - Total questions
 */
export function announceQuestionProgress(current, total) {
  const message = `Câu ${current} trong ${total} câu`;
  announceToScreenReader(message, 'assertive');
}
