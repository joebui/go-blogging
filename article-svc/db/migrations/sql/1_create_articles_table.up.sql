BEGIN;

CREATE TABLE IF NOT EXISTS articles (
  id bigserial PRIMARY KEY,
  title varchar(255) NOT NULL,
  subtitle text,
  content text,
  author_id bigint NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

COMMIT;
