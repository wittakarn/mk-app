CREATE TABLE IF NOT EXISTS `user_account` (
	`account_id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
	`surname` VARCHAR(100) NOT NULL,
	`user_name` VARCHAR(50) NOT NULL,
	`user_password` VARCHAR(100) NOT NULL,
	`role` VARCHAR(150) NOT NULL,
	PRIMARY KEY (`account_id`)
);

CREATE TABLE IF NOT EXISTS `user_role` (
	`role_id` INT(11) NOT NULL AUTO_INCREMENT,
	`role` VARCHAR(30) NOT NULL,
	PRIMARY KEY (`role_id`)
);

CREATE TABLE IF NOT EXISTS `residential_project` (
	`project_id` INT(11) NOT NULL AUTO_INCREMENT,
	`project_name` VARCHAR(100) NOT NULL,
	`developer_id` INT(11) NOT NULL,
	`residential_id` INT(11) NOT NULL,
	`contractor_id` INT(11) NOT NULL,
	`designer_id` INT(11) NOT NULL,
	`version` INT(11) NOT NULL,
	`create_datetime` DATETIME NULL DEFAULT NULL,
	`create_user` VARCHAR(20) NULL DEFAULT NULL,
	`update_datetime` DATETIME NULL DEFAULT NULL,
	`update_user` VARCHAR(20) NULL DEFAULT NULL,
	PRIMARY KEY (`project_id`)
);

CREATE TABLE IF NOT EXISTS `question_result` (
	`project_id` INT(11) NOT NULL,
	`product_id` INT(11) NOT NULL,
	`compare_result` VARCHAR(20) NULL DEFAULT NULL,
	`final_decision_result` VARCHAR(20) NULL DEFAULT NULL,
	PRIMARY KEY (`project_id`, `product_id`)
);