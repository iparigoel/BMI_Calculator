const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'bmi_calculator.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading the HTML file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);  
      }
    });
  }
  else if (req.url === '/bmi_calculator.css') {
    fs.readFile(path.join(__dirname, 'bmi_calculator.css'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading the CSS file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data); 
      }
    });
  }
  else if (req.url === '/bmi_calculator.js') {
    fs.readFile(path.join(__dirname, 'bmi_calculator.js'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading the JS file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(data); 
      }
    });
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3001, '0.0.0.0', () => {
  console.log('Project 1 running on port 3001');
});
