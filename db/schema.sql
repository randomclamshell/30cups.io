### Schema

CREATE DATABASE contacts_db;
USE contacts_db;

CREATE TABLE contacts
(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	number VARCHAR(25) NOT NULL,
	email VARCHAR(255) NOT NULL,
	comments VARCHAR(255),
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
-- remeber to check form fields to make sure name can only take characters, number can only take phone number in phone number format, email can only take eamil
