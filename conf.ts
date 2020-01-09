import{Config,browser} from "protractor"

export let config:Config={
  
  framework: 'jasmine2',
  allScriptsTimeout: 480000,
  rootElement: '[ng-app]',
  
  directConnect: true,
 // chromeDriver: './bin/ChromeDrivers/chromedriver.exe',
  ignoreUncaughtExceptions: true,

  capabilities: {
    browserName: 'firefox'
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./specs/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
}

}