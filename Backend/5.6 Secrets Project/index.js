import express from 'express';
import axios from 'axios';
import path from 'path';

const app = express();
const PORT = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use the public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', async (req, res) => {
  try {
    // Get a random secret from the API
    const result = await axios.get('https://api.example.com/random');
    

    // Render the index.ejs file and pass the secret and username
    res.render("index.ejs", { secret: result.data.secret, user: result.data.username });
  } catch (error) {
    console.error('Error fetching secret:', error);
    res.status(500).send('An error occurred while fetching the secret.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
