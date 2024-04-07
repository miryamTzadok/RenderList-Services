const express = require('express')
const app = express()



const sdk = require('api')('@render-api/v1.0#34i64rhilu8ilhkj');

sdk.auth('rnd_T8ojv6UxsjBxShk8ALj5HNExNcQt    ');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})