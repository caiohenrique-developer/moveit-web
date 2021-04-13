module.exports = {
  extends: ['@commitlint/config-conventional'],

  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'type-empty': [0, 'never'],
    'subject-empty': [0, 'never'],
    'body-max-line-length': [0, 'never'],
    'type-case': [2, 'always', ['upper-case', 'lower-case']],
    'scope-case': [
      2,
      'always',
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
        'camel-case', // camelCase
        'kebab-case', // kebab-case
        'pascal-case', // PascalCase
        'sentence-case', // Sentence case
        'snake-case', // snake_case
        'start-case', // Start Case
      ],
    ],
    'subject-case': [
      2,
      'always',
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
        'camel-case', // camelCase
        'kebab-case', // kebab-case
        'pascal-case', // PascalCase
        'sentence-case', // Sentence case
        'snake-case', // snake_case
        'start-case', // Start Case
      ],
    ],
    'body-case': [
      2,
      'always',
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
        'camel-case', // camelCase
        'kebab-case', // kebab-case
        'pascal-case', // PascalCase
        'sentence-case', // Sentence case
        'snake-case', // snake_case
        'start-case', // Start Case
      ],
    ],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'chore',

        'FEAT',
        'FIX',
        'DOC',
        'STYLE',
        'CHORE',
        'PERF',
        'REFACTOR',
        'TEST',
        'REVERT',
        'WIP',

        ':sparkles: [FEAT]',
      ],
    ],
  },
};
