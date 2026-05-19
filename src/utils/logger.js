/**
 * Logger Utility
 * Centralized error & event logging
 */

const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

class Logger {
  constructor(name = 'App') {
    this.name = name;
    this.level = import.meta.env.MODE === 'development' ? LogLevel.DEBUG : LogLevel.WARN;
  }

  setLevel(level) {
    this.level = level;
  }

  debug(message, data = null) {
    if (this.level <= LogLevel.DEBUG) {
      console.log(`[${this.name}] ${message}`, data || '');
    }
  }

  info(message, data = null) {
    if (this.level <= LogLevel.INFO) {
      console.log(`[${this.name}] ℹ️ ${message}`, data || '');
    }
  }

  warn(message, error = null) {
    if (this.level <= LogLevel.WARN) {
      console.warn(`[${this.name}] ⚠️ ${message}`, error || '');
    }
  }

  error(message, error = null) {
    if (this.level <= LogLevel.ERROR) {
      console.error(`[${this.name}] ❌ ${message}`, error || '');
      
      // Send to error tracking service (Sentry, etc.)
      if (import.meta.env.VITE_SENTRY_DSN) {
        this._sendToSentry(message, error);
      }
    }
  }

  _sendToSentry(message, error) {
    // TODO: Integrate Sentry for production error tracking
  }
}

export default Logger;
