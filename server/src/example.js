//- Startup
//  - Create connection to the `postgres` database
//    Is `learn-react` database created? -> SELECT datname FROM pg_database;
//      If not, create the database -> CREATE DATABASE "learn-react"
//  - Close the connection to the `postgres` database
//  - Create connection to the `learn-react` database
//  - Is the `races` table created?
//      If not, create the table -> CREATE TABLE races(bigint id, text name, jsonb drivers);
//- Shutdown
//  - Close connection to the `learn-react` database
//- Get all races
//  - SELECT * FROM races;
//- Get a race
//  - SELECT * FROM races WHERE id = `id`;
//- Add a race
//  - INSERT INTO races (id, name, drivers) VALUES (`id`, '`name`', `drivers`);
//    NOTE: Postgres requires all object properties have double quotes around them.
