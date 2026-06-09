const https = require('https');
const url = 'https://unsplash.com/photos/hqvUpix5s4k';
https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    const match = body.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      console.log(match[1]);
    } else {
      console.error('NOURL');
    }
  });
}).on('error', (err) => {
  console.error(err.message);
});
