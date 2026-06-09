const https = require('https');
const url = 'https://en.wikipedia.org/wiki/Auto_rickshaw';
https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const regex = /<img[^>]+src="([^"]+)"/g;
    let m;
    const urls = [];
    while ((m = regex.exec(body)) !== null) {
      urls.push(m[1]);
    }
    const filtered = urls.filter(u => u.includes('upload.wikimedia.org') && u.toLowerCase().includes('rickshaw'));
    console.log(filtered.slice(0, 50).join('\n'));
  });
}).on('error', err => console.error(err.message));
