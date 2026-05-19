/**
 * Syllabus Configuration
 * Định cấu trúc các chương trình học
 */

export const SYLLABUS_CONFIG = {
  'chuong_1': {
    title: 'Tổng hợp Chương 1: Khảo sát hàm số',
    description: 'Ôn tập các bài học về khảo sát hàm số',
    topics: [
      { id: 'k12_c1_b1', name: 'Bài 1: Tính đơn điệu' },
      { id: 'k12_c1_b2', name: 'Bài 2: Cực trị hàm số' }
    ]
  }
};

export const EXAM_CONFIG = {
  DEFAULT_TIME_PER_QUESTION: 90, // seconds
  MIN_TIME_PER_QUESTION: 10,
  MAX_TIME_PER_QUESTION: 300,
  SHUFFLE_QUESTIONS: true,
  SHUFFLE_ANSWERS: true
};

export const QUESTION_TYPES = {
  MULTIPLE_CHOICE: 'X', // Trắc nghiệm
  TRUE_FALSE: 'S',      // Đúng/Sai
  FILL_NUMBER: 'N'      // Điền số
};

export const SCORING_CONFIG = {
  PASSING_SCORE: 5.0,
  MAX_SCORE: 10.0,
  DECIMAL_PLACES: 2
};

export const TIMEOUT_CONFIG = {
  API_TIMEOUT: 30000,      // ms
  DB_RETRY_ATTEMPTS: 3,
  DB_RETRY_DELAY: 1000     // ms
};
