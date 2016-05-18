var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
function start(res){
    console.log("the reqHandler start() method was called");
    var body = '<html>' + 
        '<head>' + 
        '<meta http-equiv="Content-Type" content="text/html;'+
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' + 
        '<form action="/upload" enctype="multipart/form-data" ' +
        'method="post">' +
        '<textarea name="text" rows="20" cols=60"></textarea>' +
        '<p>' +
        '<input type="submit" value="Upload file" />' +
        '</p>' +
        '</form>' +
        '</body>' +
        '</html>';
    res.writeHead(200,{"Conten-Type": "text/plain"});
    res.write(body);
    res.end();
}

function upload(res,req){
    console.log("the reqHandler upload() method was called");
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req,function(error,fields,files){
        console.log("parsing done");
        fs.renameSync("./zpp.jpg","./zp.jpg");
        res.writeHead(200,{"Conten-Type": "text/plain"});
        res.write("received image:<br/>");
        res.write("<img src='/show'/>");
        res.end();
    });
}
function show(res){
    console.log("Request handler 'show' wal called.");
    fs.readFile("./zp.jpg","binary",function(error,file){
        if(error){
            res.writeHead(500,{"Content-Type": "text/plain"});
            res.write(error + "\n");
            res.end();
        }else{
            res.writeHead(200,{"Content-Type":"image/png"});
            res.write(file,"binary");
            res.end();
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.show = show;
