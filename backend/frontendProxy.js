const express = require('express');
const path = require('path');
const app = express();


// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) =>
    res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'index.html')
    )
);

const PORT = 3000;
app.listen(PORT, console.log(`Serving frontend proxy on port ${PORT}`));
