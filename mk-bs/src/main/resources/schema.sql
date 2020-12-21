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