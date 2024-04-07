const express = require('express')
const app = express()



app.get('', (req, res) => {
    //send - מה שיחזור ויוצג על הדפדפן / לצד לקוח
    res.status(200).send('😍👍❤')
})

app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})