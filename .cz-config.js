module.exports = {
    types: [
        // My custom types
        { value: ':sparkles: [ FEAT ]', name: '[ FEAT ]: A new feature' },
        { value: ':tada: [ FEAT ]', name: '[ INITIAL ]: Initial commit' },
        { value: ':x: [ FIX ]', name: '[ FIX ]: A bug fix' },
        { value: ':memo: [ DOC ]', name: '[ DOC ]: Documentation only changes' },
        {
            value: ':art: [ STYLE ]',
            name: '[ STYLE ]: Changes that do not affect the meaning of the code\n (white-space, formatting, missing semi-colons, etc)',
        },
        {
            value: ':recycle: [ REFACTOR ]',
            name: '[ REFACTOR ]: A code change that neither fixes a bug nor adds a feature',
        },
        {
            value: ':rocket: [ PERF ]',
            name: '[ PERF ]: A code change that improves performance',
        },
        { value: ':rotating_light: [ TEST ]', name: '[ TEST ]: Adding missing tests' },
        {
            value: ':hammer: [ CHORE ]',
            name:
                '[ CHORE ]: Changes to the build process or auxiliary tools\n and libraries such as documentation generation',
        },
        { value: ':back: [ REVERT ]', name: '[ REVERT ]: Revert to a commit' },
        { value: ':chart_with_upwards_trend: [ WIP ]', name: '[ WIP ]: Work in progress' },

        // To create release tags
        { value: 'perf', name: '{ MAJOR - TAG }: Add a release tag of perf type' },
        { value: 'fix', name: '{ PATCH - TAG }: Add a release tag of fix type' },
        { value: 'feat', name: '{ MINOR - TAG }: Add a release tag of feat type' },
    ],

    scopes: [{ name: ':bookmark:' }, { name: 'Release' }, { name: 'Test' }, { name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: "Select the type of change that you're committing:",
        scope: '\nDenote the SCOPE of this change (optional):',
        // used if allowCustomScopes is true
        customScope: 'Denote the SCOPE of this change:',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        breaking: 'List any BREAKING CHANGES (optional):\n',
        footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
        confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    skipQuestions: ['body'],

    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false

    // typePrefix: '[',
    // typeSuffix: ']',
    // subjectSeparator: ' '
    upperCaseSubject: true
}