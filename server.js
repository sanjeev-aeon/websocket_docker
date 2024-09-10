const app = require('express')();
const port = 8123;

app.get('/ping', (req, res) => {
    console.log(`${Date().valueOf()}: ping`);
    res.status(200).send('healthy');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});