const express = require('express');
const app = express();
export default function handler(req, res) {
    res.status(200).json({ message: 'Hello World' });
  }

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

