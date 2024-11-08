DROP TABLE IF EXISTS bookstore.users;

CREATE TABLE IF NOT EXISTS bookstore.users
(
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    username character varying(100) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    created_by character varying(100) COLLATE pg_catalog."default",
    updated_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by character varying(100) COLLATE pg_catalog."default",
    is_deleted boolean default false,
      PRIMARY KEY (id),
    UNIQUE (email)
)

DROP TABLE IF EXISTS bookstore.books;

CREATE TABLE IF NOT EXISTS bookstore.books
(
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    author character varying(255) COLLATE pg_catalog."default" NOT NULL,
    published_date date,
    isbn character varying(50) COLLATE pg_catalog."default",
    pages integer,
    language character varying(50) COLLATE pg_catalog."default",
    publisher character varying(100) COLLATE pg_catalog."default",
    created_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    created_by character varying(100) COLLATE pg_catalog."default",
    updated_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_by character varying(100) COLLATE pg_catalog."default",
    is_deleted boolean default false,
      PRIMARY KEY (id)
)