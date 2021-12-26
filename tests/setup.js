global.console = {

    // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
    log: console.log,
    error: jest.fn(), // console.debug are ignored in tests
    warn: console.warn,
    info: console.info,
    debug: jest.fn(), // console.debug are ignored in tests
};

global.File = class MockFile {
    fileName;
    constructor(fileBits, fileName, properties) {
      this.fileName = fileName;
      this.type = properties.type || ""
    }
  }
