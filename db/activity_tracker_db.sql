CREATE TABLE users
(user_id SERIAL PRIMARY KEY
, fName varchar(50) NOT NULL
, mName varchar(50)
, lName varchar(50) NOT NULL
, username varchar(50) NOT NULL
, email varchar(100) NOT NULL
, user_password TEXT NOT NULL);

INSERT INTO users
(fName
, lName
, username
, email
, user_password)
VALUES
('Dennis'
, 'Bingham'
, 'dpbingham90'
, 'dpbingham90@gmail.com'
, 'Password123');
