CREATE DATABASE rtdb;

CREATE TABLE spaceship(
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    activityStart DATE,
    activityEnd DATE,
    power FLOAT,
    pushPower FLOAT,
    fuel TEXT,
    weight FLOAT,
    description TEXT
);

CREATE TABLE shuttleShip(
    id SERIAL PRIMARY KEY,
    transportCapacity FLOAT,
    height FLOAT,
    idSpaceship INT,
    FOREIGN KEY (idSpaceship) REFERENCES spaceship(id)
);

CREATE TABLE unmannedSpacecraft(
    id SERIAL PRIMARY KEY,
    destiny TEXT,
    timeForDestiny FLOAT,
    speed FLOAT,
    studySubject TEXT,
    idSpaceship INT,
    FOREIGN KEY (idSpaceship) REFERENCES spaceship(id)
);

CREATE TABLE mannedSpaceflight(
    id SERIAL PRIMARY KEY,
    distanceFromEarth FLOAT,
    tripulationCapacity INT,
    idSpaceship INT,
    FOREIGN KEY (idSpaceship) REFERENCES spaceship(id)
);
