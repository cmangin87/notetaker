DROP DATABASE IF EXISTS note_db;
CREATE DATABASE note_db;

USE note_db;

-- Create the notes table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  body VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

SELECT * FROM notes;