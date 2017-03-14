CREATE TABLE people (
  id bigserial primary key,
  user_id bigint REFERENCES users (id),
  type text,
  name text,
  company text,
  address_1 text,
  address_2 text,
  city text,
  state text,
  postal integer,
  phone text,
  email text
);

CREATE TABLE works (
  id bigserial primary key,
  user_id bigserial REFERENCES users (id),
  title text,
  medium text,
  width numeric,
  height numeric,
  depth numeric,
  dimension_unit text,
  dimension_text text,
  editioned boolean DEFAULT false,
  artist_id bigint REFERENCES people (id),
  created_at timestamp with time zone
);

CREATE TABLE editions (
  id bigserial primary key,
  edition_number integer NOT NULL,
  edition_type text NOT NULL,
  price numeric,
  currency text DEFAULT 'USD',
  status text,
  work_id bigserial REFERENCES works (id),
  collection_id bigint REFERENCES people (id),
  location_id bigint REFERENCES people (id)
);

CREATE TABLE images (
  id bigserial primary key,
  url text,
  work_id bigint REFERENCES works (id)
);
