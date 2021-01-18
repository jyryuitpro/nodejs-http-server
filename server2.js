const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        const data = await fs.readFile('./server2.html');
        res.end(data);
    } catch (error) {
        console.log(err);
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.memoryUsage);
    }

})
    .listen(8081);
server.on('listening', () => {
    console.log('8081번 포트에서 서버 대기 중입니다.');
});
server.on('listening', (error) => {
    console.error(error);
});