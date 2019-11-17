-- SQL Script for assignment

CREATE Database ass3;
use ass3

create table user1(
	name varchar(24) not null,
	pass varchar(24) not null
);

create table notes(
	saved_by    varchar(24) not null,
	title   	varchar(34) not null,
	content 	varchar(34) not null,
	time_saved	time 		not null
);



-- Inserting values to table



insert into user1(name, pass) values (
	'mubariz', 'mak'
);

insert into notes(saved_by, title, content, time_saved) values (
	'mubariz', 'Hello', 'Hello World', '13:40:32'
);
