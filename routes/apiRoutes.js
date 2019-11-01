var router = require("express").Router();
var connection = require("../db/connection");

// https://expressjs.com/en/guide/routing.html

// GET responds with all notes from the database
// https://expressjs.com/en/4x/api.html#app.get.method
router.get("/api/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, result) {
    if (err) throw err;
    res.json(result);
  });
  // TODO: Create connection query to retrieve all notes from MySQL database
  // https://www.npmjs.com/package/mysql#performing-queries
});

// POST uses data passed on req.body to create a new note in the database
// https://expressjs.com/en/4x/api.html#app.post.method
router.post("/api/notes", function(req, res) {
  connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
  // TODO: Create connection query to insert a new note into MySQL database
  // https://www.npmjs.com/package/mysql#performing-queries
});

// DELETE deletes the note with an id equal to req.params.id
// https://expressjs.com/en/4x/api.html#app.delete.method
router.delete("/api/notes/:id", function(req, res) {
  connection.query("DELETE FROM notes WHERE ?", { id: req.params.id }, function(
    err,
    result
  ) {
    if (err) throw err;
    res.json(result);
  });
  // TODO: Create connection query to delete a note from MySQL database by the provided `id` parameter
  // https://www.npmjs.com/package/mysql#performing-queries
});

module.exports = router;
