const assert = require("assert");
const logger = require("./index").logger;
const stdOut = require("test-console").stdout;

var output = stdOut.inspectSync(function () {
  logger("test", "*");
});

describe("Logger", function () {
  describe("default", function () {
    context("with  empty arguments", function () {
      it("should throw reference error", function () {
        try {
          logger();
          assert.fail("Failed to throw an error");
        } catch (e) {
          if (e instanceof assert.AssertionError) {
            throw e;
          }
          assert.strictEqual(
            e.message,
            "logger argument is missing or undefined"
          );
        }
      });
    });
    context("with non-string argument", function () {
      it("should throw type error", function () {
        try {
          logger(1);
          assert.fail("Failed to throw an error");
        } catch (e) {
          if (e instanceof assert.AssertionError) {
            throw e;
          }
          assert.strictEqual(e.message, "string must be provided");
        }
      });
    });
    context("with argument", function () {
      it("should print formatted content", function () {
        assert.deepStrictEqual(output, [
          "**********\n",
          `  ${new Date().toLocaleDateString()} test\n`,
          "  **********\n",
        ]);
      });
    });
  });
});
