var server = require("./server.js");
var router = require("./router.js");
var reqHandlers = require("./reqHandlers.js");
var handle = {}
handle["/"] = reqHandlers.start;
handle["/start"] = reqHandlers.start;
handle["/upload"] = reqHandlers.upload;
handle["/show"] = reqHandlers.show;
server.start(router.route,handle);
