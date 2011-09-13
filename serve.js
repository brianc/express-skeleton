var port = process.argv[2] || 3000;
require(__dirname + '/app').listen(port);
console.log('listening on port %d', port);
