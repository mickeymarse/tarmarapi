CREATE TABLE `tarots` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`rank` TEXT NOT NULL,
	`suit` text,
	`element` text NOT NULL,
	`planet` text,
	`sign` TEXT NOT NULL,
	`meaning` TEXT NOT NULL
);
