//Types of Tests

// Unit tests – cover separated functionality:
// - E.g., test the result of a function with different input
// - Unit tests are used to verify that a piece of code (function, class, etc.) operates correctly
// - The tested code does not involve external dependencies (application state, other modules, external systems)
// - They are fast to write and fast to execute
// - Usually created by the developer, who is aware of the code specifics (white-box testing)
// - Common tools include Mocha, Chai, QUnit, Jasmine, etc.


// Integration tests – cover the communication inside and between entire modules:
//  - E.g., test if data coming from a remote request is correctly interpreted by the business logic
//  - Integration tests are used to check the communication between multiple code elements (functions, classes, entire modules)
//  - They often require the inclusion of external dependencies (other application modules, databases, remote resources)
//  - Relatively complex to create (due to the external dependencies)
//  - Can be delegated to a separate team, not involved in the writing of the code (black-box testing)
//  - Common tools include Sinon, JMock, Mockito, etc.


// End-to-end (Functional) tests – cover all steps that occur when the user performs an action, from the UI, to the DB, and back:
//  - Functional tests are used to run through the entire application, in a real environment
//  - Usually involves the whole technological stack (REST services, database operations, authentication, etc.)
//  - Depending on the expected outcome and tools used, their complexity is comparable to integration tests
//  - Mostly the concern of specialized QA automation engineers
//  - Common tools include Selenium, Puppeteer, Cypress, etc


// PLAYWRIGTH - End-to-End Testing with a Headless Browser

// What is Playwright?
// A complete suite for testing web applications in a real environment – the web browser:
//  - Our application is executed inside a "headless" browser
//  - User input is simulated, and the result is monitored
// Compatible with Chromium, Firefox and WebKit
// Available in JavaScript, TypeScript, Python, C# and Java
// Home page: https://playwright.dev/
