CREATE TABLE users (
  id bigserial primary key,
  username text NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  password_salt text NOT NULL,
  password_hash text NOT NULL,
  created_at timestamp with time zone NOT NULL default now()
);
