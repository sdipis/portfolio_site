-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 10, 2024 at 12:37 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: portfolio
--

-- --------------------------------------------------------

--
-- Table structure for table media
--

CREATE TABLE media (
  id int(11) NOT NULL,
  project_id int(11) DEFAULT NULL,
  image_filename varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table media
--

INSERT INTO media (id, project_id, image_filename) VALUES
(1, 1, 'image1a.png'),
(2, 1, 'image1b.png'),
(3, 1, 'image1c.png'),
(4, 2, 'image2a.png'),
(5, 2, 'image2b.png'),
(6, 2, 'image2c.png'),
(7, 3, 'image3a.png'),
(8, 3, 'image3b.png'),
(9, 3, 'image3c.png'),
(10, 4, 'berry.jpg'),
(11, 4, 'dandelion.jpg');

-- --------------------------------------------------------

--
-- Table structure for table projects
--

CREATE TABLE projects (
  id int(11) NOT NULL,
  title varchar(255) NOT NULL,
  description text,
  image_url varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table projects
--

INSERT INTO projects (id, title, description, image_url) VALUES
(1, 'NES', 'The Nintendo Entertainment System (NES), released in 1985, stands as an iconic milestone in the history of video gaming. Pioneering the revival of the video game industry after the infamous crash of 1983, the NES introduced classic titles such as Super Mario Bros. and The Legend of Zelda. Its distinctive rectangular controller, simple yet engaging graphics, and memorable 8-bit music became synonymous with the era, fostering a generation of gamers and laying the foundation for the gaming landscape we know today. The NES holds a cherished place in the hearts of many, serving as a timeless reminder of the joy and innovation that sparked a revolution in home entertainment.\r\n\r\n\r\n\r\n\r\n', 'nes.jpg'),
(2, 'SNES', 'The Super Nintendo Entertainment System (SNES) holds an iconic place in the realm of gaming, released by Nintendo in 1990 as the successor to the original Nintendo Entertainment System (NES). Boasting 16-bit graphics and a vibrant color palette, the SNES delivered a significant leap in gaming visuals, providing players with a more immersive experience. The console featured a rich library of classic games such as Super Mario World, The Legend of Zelda: A Link to the Past, and Super Metroid, which are still celebrated today for their timeless gameplay and memorable characters. The SNES remains a nostalgic gem, cherished by gamers for its contributions to the Golden Age of video gaming.\r\n\r\n\r\n\r\n\r\n', 'snes.jpg'),
(3, 'GameCube', 'The Nintendo GameCube, released in 2001, was a compact and innovative gaming console that left a lasting impact on the gaming community. Recognized for its unique, cube-shaped design and vibrant selection of games, the GameCube boasted classics like Super Smash Bros. Melee, The Legend of Zelda: The Wind Waker, and Super Mario Sunshine. It introduced a novel optical disc format and featured a handle for easy portability. Despite facing strong competition, the GameCube garnered a dedicated fan base and holds a nostalgic place in the hearts of gamers who fondly remember its distinctive controller and memorable titles.\r\n\r\n\r\n\r\n\r\n', 'gamecube.jpg'),
(4, 'GameBoy', 'The Game Boy Color, released by Nintendo in 1998, was a handheld gaming console that marked a significant advancement from its monochromatic predecessor, the original Game Boy. Boasting a vibrant color display and backward compatibility with a vast library of Game Boy games, it quickly became a beloved classic. The compact design, powered by AA batteries, made it a portable gaming sensation, allowing players to enjoy popular titles like Pokémon Red and Blue, The Legend of Zelda: Oracle of Ages, and Super Mario Bros. Deluxe in a full spectrum of colors. The Game Boy Color left an indelible mark on the gaming landscape, serving as a gateway to countless nostalgic memories for gamers of the late \'90s and early 2000s.\r\n\r\n\r\n\r\n\r\n', 'teal.jpg'),
(5, 'GameBoy SP', 'The Game Boy Advance SP, or GBA SP, was a compact and innovative handheld gaming console released by Nintendo in 2003. Notable for its sleek clamshell design, the GBA SP featured a foldable screen that protected it when not in use, making it highly portable. The device boasted a vibrant, backlit display that significantly improved visibility in various lighting conditions, a welcome enhancement for gamers on the go. With a rechargeable battery and compatibility with a vast library of Game Boy Advance games, the GBA SP became a beloved classic, offering a convenient and enjoyable gaming experience for players of all ages.\r\n', 'gameboysp.jpg'),
(6, 'Playstation', 'The original PlayStation, released by Sony in 1994, marked a groundbreaking era in the world of gaming. Its sleek, gray design and cutting-edge CD-ROM technology set it apart from its cartridge-based predecessors. Boasting iconic titles like \"Final Fantasy VII,\" \"Metal Gear Solid,\" and \"Resident Evil,\" the PlayStation revolutionized the gaming landscape, introducing 3D graphics and immersive storytelling. Its introduction of the DualShock controller, with its innovative analog sticks and vibration feedback, further enhanced the gaming experience. The original PlayStation not only laid the foundation for Sony\'s dominance in the gaming industry but also left an indelible mark on the hearts of gamers worldwide.', 'playstation.jpg'),
(7, 'Playstation 2', 'The PlayStation 2, released by Sony in 2000, stands as an iconic console that revolutionized the gaming industry. Boasting a diverse library of games, it became a cultural phenomenon, offering players a vast array of experiences from memorable titles like \"Grand Theft Auto: San Andreas\" to classic franchises like \"Final Fantasy\" and \"Metal Gear Solid.\" With its DVD playback capability, the PlayStation 2 also became a multimedia hub, contributing significantly to its widespread popularity and enduring legacy as one of the best-selling gaming consoles of all time.', 'playstationtwo.jpg'),
(8, 'Xbox', 'The original Xbox, released by Microsoft in 2001, marked the tech giant\'s foray into the gaming console market. Boasting cutting-edge hardware at the time, including an Intel Pentium III processor and an NVIDIA GPU, the console delivered impressive graphics and performance. Its distinctive, robust controller, known as the \"Duke,\" became iconic, and the console introduced Xbox Live, a revolutionary online gaming service. Popular titles like \"Halo: Combat Evolved\" and \"Fable\" helped establish the Xbox as a formidable player in the gaming industry, laying the foundation for Microsoft\'s ongoing presence in the console market.', 'xbox.jpg'),
(9, 'Old But Not Obsolete', 'It\'s a floppy disk', 'viagra.jpg'),
(10, 'MPC', 'Boom bap', 'mpc.jpg'),
(11, 'Blow On It', 'Video games will rot your brain', 'blow.jpg'),
(12, 'Donut', 'Dilla was here', 'dilla.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table media
--
ALTER TABLE media
  ADD PRIMARY KEY (id),
  ADD KEY project_id (project_id);

--
-- Indexes for table projects
--
ALTER TABLE projects
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table media
--
ALTER TABLE media
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table projects
--
ALTER TABLE projects
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table media
--
ALTER TABLE media
  ADD CONSTRAINT media_ibfk_1 FOREIGN KEY (project_id) REFERENCES projects (id);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
