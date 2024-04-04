CREATE TABLE `tarots` (
	`name` text PRIMARY KEY NOT NULL,
	`type` text NOT NULL,
	`rank` text NOT NULL,
	`suit` text,
	`element` text NOT NULL,
	`planet` text,
	`sign` text,
	`meaning` text NOT NULL
);
