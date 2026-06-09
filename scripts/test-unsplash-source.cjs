const https = require('https');
const url = 'https://source.unsplash.com/featured/?india-auto-rickshaw';
https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  console.log('status:', res.statusCode);
  console.log('content-type:', res.headers['content-type']);
  console.log('location:', res.headers.location);
  res.on('data', () => {});
  res.on('end', () => console.log('done'));
}).on('error', (err) => console.error(err.message));
