/**
 * Input Validation Utilities
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate number input
 * @param {any} value - Value to validate
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {boolean}
 */
export function isValidNumber(value, min = -Infinity, max = Infinity) {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
}

/**
 * Validate time per question
 * @param {number} value - Time value in seconds
 * @returns {boolean}
 */
export function isValidTimePerQuestion(value) {
  return isValidNumber(value, 10, 300);
}

/**
 * Validate question count
 * @param {number} value - Question count
 * @param {number} max - Maximum available
 * @returns {boolean}
 */
export function isValidQuestionCount(value, max) {
  return isValidNumber(value, 0, max);
}

/**
 * Validate exam configuration
 * @param {object} config - Exam config object
 * @returns {object} { isValid: boolean, errors: array }
 */
export function validateExamConfig(config) {
  const errors = [];

  if (!config.timePerQuestion || !isValidTimePerQuestion(config.timePerQuestion)) {
    errors.push('Thời gian mỗi câu phải từ 10-300 giây');
  }

  if (!config.questions || config.questions.length === 0) {
    errors.push('Phải chọn ít nhất 1 câu hỏi');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validate answer
 * @param {any} answer - Answer value
 * @param {string} type - Question type (X, S, N)
 * @returns {boolean}
 */
export function isValidAnswer(answer, type) {
  switch (type) {
    case 'X': // Multiple choice
      return typeof answer === 'number' && answer >= 0;
    case 'S': // True/False
      return Array.isArray(answer) && answer.every(a => a === true || a === false || a === null);
    case 'N': // Fill number
      return typeof answer === 'string' || typeof answer === 'number';
    default:
      return false;
  }
}
