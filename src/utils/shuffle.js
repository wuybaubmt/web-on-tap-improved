/**
 * Shuffle Utilities
 * Fisher-Yates shuffle algorithm for randomization
 */

/**
 * Fisher-Yates shuffle algorithm
 * @param {array} array - Array to shuffle
 * @returns {array} Shuffled array (new reference)
 */
export function shuffleArray(array) {
  if (!Array.isArray(array)) return array;
  
  const shuffled = [...array]; // Create copy to avoid mutation
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

/**
 * Shuffle questions with metadata preservation
 * @param {array} questions - Questions array
 * @returns {array} Shuffled questions
 */
export function shuffleQuestions(questions) {
  return shuffleArray(questions);
}

/**
 * Shuffle answers in multiple choice question
 * @param {object} question - Question object
 * @returns {object} Question with shuffled answers
 */
export function shuffleMultipleChoiceAnswers(question) {
  if (question.type !== 'X') return question;
  
  const answers = question.answers.map((text, idx) => ({
    text,
    isCorrect: idx === question.correctIndex
  }));
  
  const shuffled = shuffleArray(answers);
  
  return {
    ...question,
    answers: shuffled.map(a => a.text),
    correctIndex: shuffled.findIndex(a => a.isCorrect)
  };
}

/**
 * Shuffle true/false answers
 * @param {object} question - Question object
 * @returns {object} Question with shuffled answers
 */
export function shuffleTrueFalseAnswers(question) {
  if (question.type !== 'S') return question;
  
  const answers = question.answers.map((text, idx) => ({
    text,
    isTrue: question.correctMatrix[idx]
  }));
  
  const shuffled = shuffleArray(answers);
  
  return {
    ...question,
    answers: shuffled.map(a => a.text),
    correctMatrix: shuffled.map(a => a.isTrue)
  };
}

/**
 * Shuffle all types of questions
 * @param {array} questions - Questions array
 * @param {boolean} shuffleAnswers - Should shuffle answers in each question
 * @returns {array} Shuffled questions
 */
export function shuffleQuestionsCompletely(questions, shuffleAnswers = true) {
  let result = shuffleArray(questions);
  
  if (shuffleAnswers) {
    result = result.map(q => {
      if (q.type === 'X') return shuffleMultipleChoiceAnswers(q);
      if (q.type === 'S') return shuffleTrueFalseAnswers(q);
      return q;
    });
  }
  
  return result;
}
