CREATE TABLE IF NOT EXISTS runepages (
 runepage_id int(8) NOT NULL,
 champ_name varchar(25) NOT NULL,
 runepage_name varchar(25) NOT NULL,
 keystone_rune varchar(50) NOT Null,
 main_rune_1 varchar(20) NOT Null,
 main_rune_2 varchar(20) NOT Null,
 main_rune_3 varchar(20) NOT Null,
 lesser_rune_1 varchar(20) NOT Null,
 lesser_rune_2 varchar(20) NOT Null,
 PRIMARY KEY (runepage_id)
);

ALTER TABLE runepages MODIFY COLUMN runepage_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

INSERT INTO runepages (champ_name, runepage_name, keystone_rune, main_rune_1, main_rune_2, main_rune_3, lesser_rune_1, lesser_rune_2) VALUES
('Aatrox', 'Aatrox jungle', 'Conqueror', 'Triumph', 'Legend: Tenacity', 'Coup de Grace', 'Bone Plating', 'Chrysalis'),
('Aatrox', 'Aatrox top bruiser', 'Grasp of the Undying', 'Font of Life', 'Conditioning', 'Revitalize', 'Legend: Alacrity', 'Last Stand'),
('Ahri', 'dalslla', 'keystone', 'main1', 'main2', 'main3', 'lesser1', 'lesser2'),
('Karthus', 'dsfsfsdf', 'keystone', 'main1', 'main2', 'main3', 'lesser1', 'lesser2');