
exports.config = {

  
    platform:'ios',
    specs: [
  
      './features/*.feature',
  
    ],
    // Patterns to exclude.
    exclude: [
      // 'path/to/excluded/files'
    ],
    params: {},
    async: true,
    maxInstances: 5,
    port: 4723,
    path: '/wd/hub',
  
    logLevel: 'info',
    logOutput: './test/testResults/cucumber-json/',
    coloredLogs: true,
    deprecationWarnings: true,
  
    bail: 0,
    count: 0,
  
    screenshotPath: './test/testResults/errorShots/',
  
    // Default timeout for all waitFor* commands.
    waitforTimeout: 240000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 240000,
    //
    // Default request retries count
    connectionRetryCount: 3,

    capabilities: [{
    
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
    'appium:automationName': 'XCUITest',
  'appium:deviceName': 'iPhone 12',
  'appium:platformName': 'iOS',
  'appium:platformVersion': '14.5',
  'appium:app': '/Users/satthakur/Library/Developer/Xcode/DerivedData/BasalMMA-gbkjrblooycoahbikyzzmuxowvgg/Build/Products/DebugInternalIV-iphonesimulator/BasalMMA.app',
  'appium:wdaLocalPort': 8100,
  'appium:newCommandTimeout': 120000,
  'appium:fullReset': false,
        //
       
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
  
    services: ['chromedriver',
      ['appium', {
        args: {
          address: '0.0.0.0',
          commandTimeout: '120000',
          sessionOverride: true,
          debugLogSpacing: true,
          relaxedSecurity: true,
          basePath: '/wd/hub',
        },
      }],
    ],
    framework: 'cucumber',
  
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['.', './node_modules/dsat/utils/step-definitions/given.js','./node_modules/dsat/utils/step-definitions/when.js','./node_modules/dsat/utils/step-definitions/when.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
  
    reporters: [
      // Like this with the default options, see the options below
      // 'cucumberjs-json',
  
      // OR like this if you want to set the folder and the language
      ['cucumberjs-json', {
        jsonFolder: './test/testResults/json/',
        language: 'en',
      },
      ],
    ],
  
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
       * Gets executed once before all workers get launched.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       */
    onPrepare: (config) => {
      console.log('Starting Connected Logbook Test');
  
    },
    /**
       * Gets executed just before initialising the webdriver session and test framework. It allows you
       * to manipulate configurations depending on the capability or spec.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that are to be run
       */
    async beforeSession(config, capabilities, specs) {
      // ---------------------------------------
      // Custom global variables for screenshots
      // ---------------------------------------
      global.skipScreenshotForTheStep = false;
      global.platform = this.platform;
      // -------------------------------------
      // Custom global variables for execution
      // -------------------------------------
      global.elementTimeOut = 240000;

    },
    /**
       * Gets executed before test execution begins. At this point you can access to all global
       * variables like `browser`. It is the perfect place to define custom commands.
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that are to be run
       */
  
    async before(capabilities, specs) {
    },
    /**
       * Runs before a WebdriverIO command gets executed.
       * @param {String} commandName hook command name
       * @param {Array} args arguments that command would receive
       */
    // beforeCommand: function (commandName, args) {
    // },
    /**
       * Runs before a Cucumber feature
       */
    beforeFeature(uri, feature) {
    // -----------------------------------------------
    // Custom 'before-feature' variables for execution
    // -----------------------------------------------
      let ele = [];
      const steps = [];
      const texts = [];
      ele = feature.children;
      for (i = 0; i < ele.length; i += 1) {
        steps.push(ele[i].scenario.steps)
      }
      // console.log(steps)
      for (i = 0; i < steps.length; i += 1) {
        // texts.push(steps[i])
        for (j = 0; j < steps[i].length; j += 1) {
          // console.log(steps[i][j].text)
          let val = steps[i][j].text;
          val = val.replace(/\s/g, '_')
          names.push(val + (i + 1));
        }
      }
    },
    /**
       * Runs before a Cucumber scenario
       */
    /**
       * Runs before a Cucumber step
       */
    
    async beforeStep({ uri, feature, step }, context) {
    },
    /**
       * Runs after a Cucumber step
       */
    async afterStep(uri, feature, {
      error, result, duration, passed,
    }, stepData, context) {
    },
    /**
       * Runs after a Cucumber scenario
       */
    // afterScenario: function (uri, feature, scenario, result, sourceLocation) {
    // },
    /**
       * Runs after a Cucumber feature
       */
    // afterFeature: function (uri, feature, scenarios) {
    // },
  
    /**
       * Runs after a WebdriverIO command gets executed
       * @param {String} commandName hook command name
       * @param {Array} args arguments that command would receive
       * @param {Number} result 0 - command success, 1 - command error
       * @param {Object} error error object if any
       */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
       * Gets executed after all tests are done. You still have access to all global variables from
       * the test.
       * @param {Number} result 0 - test pass, 1 - test fail
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that ran
       */
    async after(result, capabilities, specs) {
    },
    /**
       * Gets executed right after terminating the webdriver session.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that ran
       */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
       * Gets executed after all workers got shut down and the process is about to exit. An error
       * thrown in the onComplete hook will result in the test run failing.
       * @param {Object} exitCode 0 - success, 1 - fail
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {<Object>} results object containing test results
       */
    onComplete: (exitCode, config, capabilities, results) => {
      // -----------------------------------------------
      // Custom variables for zipping and saving reports
      // ----------------------------------------------
  
      // Generate the report when all tests are done
  
      // ---------------------------------------
      // Multiple-cucumber-html-reporter options
      // ---------------------------------------
  
    
  
    },
    /**
      * Gets executed when a refresh happens.
      * @param {String} oldSessionId session ID of the old session
      * @param {String} newSessionId session ID of the new session
      */
    // onReload: function(oldSessionId, newSessionId) {
    // }
  
    // adding to configure execution
  
    // beforeSession() {
    //     console.log(browser.)
    // }
  
  }