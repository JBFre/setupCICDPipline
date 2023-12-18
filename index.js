const express = require('express');
const app = express();
const firebase = require('firebase/app'); 
const db = firebase.firestore();
const auth = firebase.auth();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Export the app
module.exports = app;

// Start the app if it's the main module
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
