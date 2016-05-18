function route(pathname,handle,res,postData){
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](res,postData);
    }else{
        console.log("No request Handler found for " + pathname);
        res.writeHead(404,{"Conten-Type": "text/plain"});
        res.write("404 not found");
        res.end();
    }
}
exports.route = route;
