var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请输入指定端口。如：\nnode server.js 8888')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true) // 格式化参数
  var pathWithQuery = request.url
  var queryString = ''
  if (pathWithQuery.indexOf('?') >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
  }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** main start ************/

  console.log('有小可爱访问服务器。路径（带查询参数）为：' + pathWithQuery)

  if (path === '/index.html') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    let string = fs.readFileSync('src/index.html')
    response.write(string)
    response.end()
  } else if (path === '/main.js') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('src/main.js'))
    response.end()
  } else if (path === '/style.css') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(fs.readFileSync('src/style.css'))
    response.end()
  } else if (path === '/index.js') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('src/index.js'))
    response.end()
  } else if (path === '/add.html') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(fs.readFileSync('src/add.html'))
    response.end()
  } else if (path === '/add2.xml') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/xml;charset=utf-8')
    response.write(fs.readFileSync('src/add2.xml'))
    response.end()
  } else if (path === '/test.json') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(fs.readFileSync('src/test.json'))
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你输入的路径有错误哦~`)
    response.end()
  }

  /******** main end ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功！请输入下列地址访问\nhttp://localhost:' + port)
