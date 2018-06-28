SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `champions` (
 `champ_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `champ_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (`champ_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `champions` (`champ_id`, `champ_name`) VALUES
  ("CHAM001", "Aatrox"),
  ("CHAM002", "Ahri"),
  ("CHAM003", "Akali"),
  ("CHAM004", "Alistar"),
  ("CHAM005", "Amumu"),
  ("CHAM006", "Anivia"),
  ("CHAM007", "Annie"),
  ("CHAM008", "Ashe"),
  ("CHAM009", "Aurelion Sol"),
  ("CHAM010", "Azir"),
  ("CHAM011", "Bard"),
  ("CHAM012", "Blitzcrank"),
  ("CHAM013", "Brand"),
  ("CHAM014", "Braum"),
  ("CHAM015", "Caitlyn"),
  ("CHAM016", "Camille"),
  ("CHAM017", "Cassiopeia"),
  ("CHAM018", "Cho'Gath"),
  ("CHAM019", "Corki"),
  ("CHAM020", "Darius"),
  ("CHAM021", "Diana"),
  ("CHAM022", "Dr. Mundo"),
  ("CHAM023", "Draven"),
  ("CHAM024", "Ekko"),
  ("CHAM025", "Elise"),
  ("CHAM026", "Evelynn"),
  ("CHAM027", "Ezreal"),
  ("CHAM028", "Fiddlesticks"),
  ("CHAM029", "Fiora"),
  ("CHAM030", "Fizz"),
  ("CHAM031", "Galio"),
  ("CHAM032", "Gangplank"),
  ("CHAM033", "Garen"),
  ("CHAM034", "Gnar"),
  ("CHAM035", "Graves"),
  ("CHAM036", "Hecarim"),
  ("CHAM037", "Heimerdinger"),
  ("CHAM038", "Illaoi"),
  ("CHAM039", "Irelia"),
  ("CHAM040", "Ivern"),
  ("CHAM041", "Jarvan IV"),
  ("CHAM042", "Jax"),
  ("CHAM043", "Jayce"),
  ("CHAM044", "Jhin"),
  ("CHAM045", "Jinx"),
  ("CHAM046", "Kai'Sa"),
  ("CHAM047", "Karma"),
  ("CHAM048", "Karthus");