/**
 * DOM Utilities
 * Safe DOM manipulation & XSS prevention
 */

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} Escaped HTML
 */
export function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Sanitize HTML - keep safe tags only
 * @param {string} html - HTML to sanitize
 * @returns {string} Sanitized HTML
 */
export function sanitizeHtml(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  
  // Remove script tags and event handlers
  div.querySelectorAll('script, iframe, embed, object').forEach(el => el.remove());
  
  // Remove event handlers
  div.querySelectorAll('*').forEach(el => {
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });
  });
  
  return div.innerHTML;
}

/**
 * Safe innerHTML assignment
 * @param {HTMLElement} element - Target element
 * @param {string} html - HTML content
 * @param {boolean} sanitize - Should sanitize HTML
 */
export function setInnerHTML(element, html, sanitize = true) {
  if (!element) return;
  element.innerHTML = sanitize ? sanitizeHtml(html) : html;
}

/**
 * Create element safely
 * @param {string} tag - HTML tag
 * @param {object} attributes - Element attributes
 * @param {string} content - Element content
 * @returns {HTMLElement}
 */
export function createElement(tag, attributes = {}, content = '') {
  const el = document.createElement(tag);
  
  Object.entries(attributes).forEach(([key, value]) => {
    if (key.startsWith('on')) {
      // Don't set event handlers via attributes
      return;
    }
    el.setAttribute(key, String(value));
  });
  
  if (content) {
    el.textContent = content;
  }
  
  return el;
}

/**
 * Show loading spinner
 * @param {HTMLElement} container - Container element
 */
export function showLoader(container) {
  const loader = createElement('div', {
    class: 'loader',
    'aria-label': 'Đang tải...'
  });
  loader.innerHTML = '<div class="spinner"></div><p>⏳ Đang tải...</p>';
  container.innerHTML = '';
  container.appendChild(loader);
}

/**
 * Show error message
 * @param {HTMLElement} container - Container element
 * @param {string} message - Error message
 * @param {string} code - Error code
 */
export function showError(container, message, code = '') {
  const error = createElement('div', {
    class: 'error-box',
    role: 'alert'
  });
  error.innerHTML = `
    <div class="error-icon">❌</div>
    <div class="error-content">
      <h3>Lỗi</h3>
      <p>${escapeHtml(message)}</p>
      ${code ? `<small>Mã lỗi: ${escapeHtml(code)}</small>` : ''}
    </div>
  `;
  container.innerHTML = '';
  container.appendChild(error);
}

/**
 * Remove element safely
 * @param {HTMLElement} element - Element to remove
 */
export function removeElement(element) {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

/**
 * Add class with animation
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name
 * @param {number} duration - Animation duration (ms)
 */
export function addClass(element, className, duration = 0) {
  if (!element) return;
  element.classList.add(className);
}

/**
 * Remove class with animation
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name
 */
export function removeClass(element, className) {
  if (!element) return;
  element.classList.remove(className);
}

/**
 * Toggle class
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name
 * @param {boolean} force - Force add/remove
 */
export function toggleClass(element, className, force = undefined) {
  if (!element) return;
  element.classList.toggle(className, force);
}
