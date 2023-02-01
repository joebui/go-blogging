CREATE TABLE users (
  id bigserial PRIMARY KEY,
  username varchar NOT NULL UNIQUE,
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  firstname varchar(255),
  lastname varchar(255),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),
);
