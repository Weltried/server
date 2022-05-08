use weltried;

create table if not exists user (
    phone_number    char(11)        NOT NULL,
    height          numeric(4, 1),
    weight          numeric(3, 1),
    primary key (phone_number),
    constraint minimum_height check (height >= 100.0),
    constraint maximum_height check (height < 272.0),
    constraint minimum_weight check (weight > 20.0),
    constraint maximum_weight check (weight <= 99.9)
);

create table if not exists posture (
    phone_number    CHAR(11)        NOT NULL,
    date            CHAR(8)         NOT NULL,
    time            CHAR(6)         NOT NULL,
    position        INT             NOT NULL,
    PRIMARY KEY (phone_number, date, time),
    FOREIGN KEY (phone_number) REFERENCES user(phone_number)
        ON DELETE CASCADE ON UPDATE CASCADE,
    constraint minimum_position check (position >= 0),
    constraint maximum_position check (position <= 8)
);
-- date: yyyymmdd
-- time: hhmmss
