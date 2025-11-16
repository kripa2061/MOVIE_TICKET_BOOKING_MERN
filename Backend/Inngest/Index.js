const { Inngest } = require("inngest");

const inngest = new Inngest({ id: "my-app" });
const functions = [];

module.exports = { inngest, functions };
