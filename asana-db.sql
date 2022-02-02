DROP TABLE IF EXISTS `tag`;
DROP TABLE IF EXISTS `yogaType`;

CREATE TABLE `tag` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL
);

CREATE TABLE `yogaType` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `intro` TEXT NOT NULL,
    `subtitle1` VARCHAR(255) NOT NULL,
    `text1` TEXT NOT NULL,
    `subtitle2` VARCHAR(255) NOT NULL,
    `text2` TEXT NOT NULL,
    `picture` VARCHAR(255) NOT NULL,
    `id_tag` INT NOT NULL,
    FOREIGN KEY (id_tag) REFERENCES tag(id) 
);

INSERT INTO `tag` (`title`) VALUES ('Dynamique'), ('Doux'), ('Méditation');

INSERT INTO `yogaType` (`title`, `intro`, `subtitle1`, `text1`, `subtitle2`, `text2`, `picture`, `id_tag`) VALUES ('ashtanga', 'blabla', 'bli', 'blou', 'ble', 'bla', 'bli', 1);

