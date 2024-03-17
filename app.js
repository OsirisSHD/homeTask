const http = require('http');

let views = {
  '/': 0,
  '/about': 0
}; 

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    views['/']++; 
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8"
    });
    res.end(`
      <h1>/</h1> 
      <p>Количество просмотров: ${views['/']}</p>
      <a href="http://127.0.0.1:3000/about">Страница about</a>
    `);
  } else if (req.url === '/about') {
    views['/about']++; 
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8"
    });
    res.end(`
      <h1>about</h1> 
      <p>Количество просмотров: ${views['/about']}</p>
      <a href="http://127.0.0.1:3000/">Страница по слэшу</a>
    `);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8"
    });
    res.end(`
      <h1>Такой страницы не существует</h1> 
      <a href="http://127.0.0.1:3000/">Перейти на страницу по слэшу</a>
      <a href="http://127.0.0.1:3000/about">Перейти на страницу about</a>
    `);
  }
});

server.listen(3000);