CREATE DATABASE IF NOT EXISTS nest_tutorial DEFAULT character set utf8;
CREATE USER 'tester'@'%' IDENTIFIED WITH caching_sha2_password BY 'tester';
GRANT ALL PRIVILEGES ON *.* TO 'tester'@'%';