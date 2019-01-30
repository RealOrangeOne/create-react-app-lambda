const fs = require('fs');

// show object spread works, i.e. babel works
const obj = {
  foo: 'bar'
};
export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({paths: fs.readdirSync(process.cwd()), dir: __dirname, cwd: process.cwd()})
  });
}
