require("dotenv").config(); // Załaduj zmienne środowiskowe z pliku .env
const express = require("express"); // Importuj framework Express
const bodyParser = require("body-parser"); // Middleware do parsowania treści żądań
const cors = require("cors"); // Middleware do obsługi CORS
const sequelize = require("./config/db"); // Importuj instancję Sequelize

const postRoutes = require("./routes/posts"); // Importuj trasy dla postów

const app = express(); // Utwórz instancję aplikacji Express
const PORT = process.env.PORT || 3000; // Port na którym będzie nasłuchiwał serwer

// Middleware
app.use(cors()); // Użyj CORS dla wszystkich żądań
app.use(bodyParser.json()); // Parsuj JSON przychodzący w treści żądań

// Routes
app.use("/posts", postRoutes); // Użyj tras dla postów

// Synchronizuj bazy danych i uruchom serwer
sequelize
  .sync()
  .then(() => {
    // Synchronizuj modele z bazą danych
    console.log("Database synchronized");
    app.listen(PORT, () => {
      // Uruchom serwer na zadanym porcie
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during database synchronization:", err);
  });
const colors = require("colors");
console.log("Server running on port 3000".blue);