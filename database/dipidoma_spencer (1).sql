-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 26, 2024 at 01:03 PM
-- Server version: 10.6.16-MariaDB-cll-lve-log
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dipidoma_spencer`
--

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `image_filename` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `project_id`, `image_filename`) VALUES
(16, 1, 'nesremote.jpg'),
(18, 2, 'snesremote.jpg'),
(19, 6, 'playstationtwo.jpg'),
(27, 31, 'projects/blitzed/blitzed_ad_1.jpg'),
(28, 31, 'projects/blitzed/blitzed_ad_2.jpg'),
(29, 31, 'projects/blitzed/blitzed_threads.jpg'),
(30, 71, 'projects/jeep/front.jpg'),
(31, 71, 'projects/jeep/back.jpg'),
(32, 40, 'projects/kavorka/instagram_2.jpg'),
(33, 40, 'projects/kavorka/instagram_1.jpg'),
(34, 40, 'projects/kavorka/instagram_3.jpg'),
(35, 40, 'projects/kavorka/kavorka_ad_1.jpg'),
(38, 40, 'projects/kavorka/logos.jpg'),
(39, 40, 'projects/kavorka/logo_slugs.jpg'),
(40, 40, 'projects/kavorka/logos_text.jpg'),
(41, 31, 'projects/blitzed/b_logo.jpg'),
(42, 31, 'projects/blitzed/type_logo.jpg'),
(44, 1, 'nes.jpg'),
(46, 2, 'snes.jpg'),
(47, 6, 'playstation.jpg'),
(48, 30, 'gamecube.jpg'),
(49, 31, 'projects/blitzed/blitzed_thumb.jpg'),
(50, 32, 'random/skull_digital_paint.jpg'),
(51, 34, 'viagra.jpg'),
(52, 35, 'blow.jpg'),
(53, 36, 'xbox.jpg'),
(54, 37, 'gameboysp.jpg'),
(55, 39, 'zapper.jpg'),
(57, 40, 'projects/kavorka/kavorka_ad_2.jpg'),
(58, 42, 'dilla.jpg'),
(59, 43, 'random/alien.gif'),
(60, 44, 'projects/hcad/ad_1.jpg'),
(61, 45, 'random/wall.jpg'),
(62, 46, 'random/vivid-memories.gif'),
(63, 47, 'projects/3d/gold.jpg'),
(64, 48, 'random/knife.jpg'),
(65, 49, 'playstationtwo.jpg'),
(66, 50, 'random/letters.jpg'),
(67, 51, 'random/snowglobe.jpg'),
(68, 52, 'random/watches.jpg'),
(69, 53, 'random/tagger.jpg'),
(70, 54, '../uploads/img1707623367.jpeg'),
(71, 56, '../uploads/img1707620111.jpg'),
(72, 57, '../uploads/img1707623252.png'),
(73, 58, '../uploads/img1707623324.jpg'),
(74, 59, 'random/turtle.jpg'),
(75, 60, '../uploads/img1707690731.jpg'),
(76, 61, '../uploads/img1707690811.png'),
(77, 62, '../uploads/img1707690921.jpg'),
(78, 64, '../uploads/img1707759185.jpg'),
(79, 65, '../uploads/img1707759197.jpg'),
(80, 66, '../uploads/img1707759206.jpg'),
(81, 67, '../uploads/img1707759226.jpg'),
(82, 70, '../uploads/img1707759478.jpg'),
(83, 71, '../uploads/img1708099826.jpg'),
(86, 44, 'projects/hcad/dice.jpg'),
(87, 44, 'projects/hcad/domino.jpg'),
(88, 44, 'projects/hcad/card.jpg'),
(90, 41, 'projects/3d/lizard.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `display` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `moreinfo` text NOT NULL,
  `extra` varchar(5) NOT NULL,
  `extra_content` varchar(30) NOT NULL,
  `extra_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `display`, `type`, `moreinfo`, `extra`, `extra_content`, `extra_url`) VALUES
(1, 'NES', 'The Nintendo Entertainment System (NES), released in 1985, stands as an iconic milestone in the history of video gaming. \n\n<br><br>Pioneering the revival of the video game industry after the infamous crash of 1983, the NES introduced classic titles such as Super Mario Bros. and The Legend of Zelda. Its distinctive rectangular controller, simple yet engaging graphics, and memorable 8-bit music became synonymous with the era, fostering a generation of gamers and laying the foundation for the gaming landscape we know today. \n\n<br><br>The NES holds a cherished place in the hearts of many, serving as a timeless reminder of the joy and innovation that sparked a revolution in home entertainment.', 'nes.jpg', 'design', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', '', '', ''),
(2, 'SNES', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'snes.jpg', 'design', 'The Super Nintendo Entertainment System (SNES) holds an iconic place in the realm of gaming, released by Nintendo in 1990 as the successor to the original Nintendo Entertainment System (NES). Boasting 16-bit graphics and a vibrant color palette, the SNES delivered a significant leap in gaming visuals, providing players with a more immersive experience. The console featured a rich library of classic games such as Super Mario World, The Legend of Zelda: A Link to the Past, and Super Metroid, which are still celebrated today for their timeless gameplay and memorable characters. The SNES remains a nostalgic gem, cherished by gamers for its contributions to the Golden Age of video gaming.\n\n\n\n\n', '', '', ''),
(6, 'Playstation', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'playstation.jpg', 'design', 'The original PlayStation, released by Sony in 1994, marked a groundbreaking era in the world of gaming. Its sleek, gray design and cutting-edge CD-ROM technology set it apart from its cartridge-based predecessors. Boasting iconic titles like \"Final Fantasy VII,\" \"Metal Gear Solid,\" and \"Resident Evil,\" the PlayStation revolutionized the gaming landscape, introducing 3D graphics and immersive storytelling. Its introduction of the DualShock controller, with its innovative analog sticks and vibration feedback, further enhanced the gaming experience. The original PlayStation not only laid the foundation for Sony\'s dominance in the gaming industry but also left an indelible mark on the hearts of gamers worldwide.', '', '', ''),
(30, 'GameCube', 'GC', 'gamecube.jpg', 'design', 'The PlayStation 2, released by Sony Computer Entertainment in 2000, stands as an iconic console that significantly shaped the landscape of gaming. Boasting a sleek black design and powerful hardware for its time, the PS2 became the best-selling video game console in history, with a diverse library of over 3,800 games. Its introduction marked a paradigm shift with the inclusion of a built-in DVD player, enhancing its appeal beyond gaming enthusiasts. The PS2 featured innovative titles such as Grand Theft Auto: San Andreas, Final Fantasy X, and Metal Gear Solid 2, contributing to its lasting cultural impact. With its reliable performance, extensive game library, and multimedia capabilities, the PlayStation 2 remains a beloved classic, evoking nostalgia among gamers and securing its place as a legendary console in the history of video gaming.', '', '', ''),
(31, 'Blitzed', 'Blitzed.ca is a branding/ web/ learning venture.', 'projects/blitzed/blitzed_thumb.jpg', 'design', 'Originally a marketplace for independent glass artists to network/ make sales. This site never seemed to go anywhere. There\'s still hope!!', '', '', ''),
(32, 'Digital Painting - Skull', 'Hand drawn in ProCreate on iPad', 'random/skull_digital_paint.jpg', 'design', 'Vibrant, macabre, fun', '', '', ''),
(34, 'Never Obsolete', 'This is a (somewhat) minimalistic, isometric take. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'viagra.jpg', 'design', 'It\'s a floppy disk.', '', '', ''),
(35, 'Blow on it', 'This is a (somewhat) minimalistic, isometric take. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'blow.jpg', 'design', 'Video games will rot your brain.', '', '', ''),
(36, 'Xbox', 'The original Xbox, released by Microsoft on November 15, 2001, marked the tech giant\'s entry into the console gaming market. Boasting impressive hardware for its time, including an 8GB hard drive and an Intel Pentium III processor, the Xbox aimed to compete with established players like Sony\'s PlayStation 2 and Nintendo\'s GameCube. One of its standout features was its robust online multiplayer capabilities through Xbox Live, setting the stage for the online gaming experiences we know today. The console also introduced the iconic Duke controller, later replaced by the more compact Controller S. With titles like \"Halo: Combat Evolved\" that became synonymous with the platform, the original Xbox left a lasting impact on the gaming industry.', 'xbox.jpg', 'design', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', '', '', ''),
(37, 'GameBoy SP', 'The Game Boy Advance SP (GBA SP) is a portable gaming console released by Nintendo in 2003. It is a compact and foldable version of the Game Boy Advance, featuring a clamshell design with a backlit screen that enhances visibility in various lighting conditions. The SP introduced a rechargeable lithium-ion battery, providing convenience over the use of disposable batteries in its predecessor. With a diverse library of games ranging from classic titles to innovative releases, the Game Boy Advance SP remains a cherished device for gaming enthusiasts, offering a nostalgic and portable gaming experience.', 'gameboysp.jpg', 'design', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', '', '', ''),
(39, 'Zapper', 'The Nintendo Zapper is a light gun accessory designed for use with the Nintendo Entertainment System (NES), first released in 1985. It became iconic for its distinctive design, resembling a futuristic firearm, and its use in popular games like Duck Hunt. The Zapper operates by detecting light from the television screen when the trigger is pulled, allowing players to interact with on-screen targets. While initially bundled with the NES in some packages, the Nintendo Zapper has since become a nostalgic symbol of early video gaming, reflecting the charm and simplicity of classic gaming peripherals.', 'zapper.jpg', 'design-mid', '\"Ceci n\'est pas une pipe\" is a famous surrealist painting by René Magritte. Translated as \"This is not a pipe\" in English, the artwork challenges the viewer\'s perception by depicting a pipe accompanied by the contradictory text. Magritte intended to highlight the distinction between representation and reality, prompting viewers to consider the gap between the physical object and its artistic representation, urging contemplation on the nature of art and language.', '', '', ''),
(40, 'KAVORKA', 'KAVORKA also has a 4-letter text logo which can be used as a secondary or complimentary logo in combination with the full lettered brand name.<br><br>\n\n*Just remember all caps when you spell the brand’s name:\nWhether you use full spelling (KAVORKA) or the 4-letter(KVKA): KAVORKA is always written in capital letters.', 'projects/kavorka/kavorka_ad_2.jpg', 'design-large', 'KAVORKA branding embraces simplicity and contrast for our brand image. Relying heavily on symetrical components, as found in the text logo and icons. Our packaging takes advantage of rotational repitition so consumers can read our logo regardless of the orientation of the box they might be seeing.<br><br>\n\nAccordingly, we embrace unconventional design choices like heavy strokes and deep contrast so our products standout even amongst a distracting fog of com-petitors commonly found on store shelves. In conjunction with our coloring scheme of predominantly yellow and black, we stand out like a taxi cab.', 'true', 'pdf', 'dist/pdf/kavorka_styleguide.pdf'),
(41, 'Lizard Man', 'Made in cinema4D', 'projects/3d/lizard.jpg', 'design', 'Features rigged hands, and semi-rigged facial expressions.', '', '', ''),
(42, 'Dilla', 'Donut', 'dilla.jpg', 'design', 'MPC', '', '', ''),
(43, 'Alien', 'Out of this world', 'random/alien.gif', 'design', 'KFC bucket', '', '', ''),
(44, 'It\'s Not a Game', 'Not a game', 'projects/hcad/ad_1.jpg', 'design', 'Health Canada ad for marijuana use.', 'true', 'video', 'dist/projects/hcad/video/video_ad.mp4'),
(45, 'Metal Wall', 'This is just a wall.', 'random/wall.jpg', 'design-mid', 'Nothing to see here. Stay out.', '', '', ''),
(46, 'GameBoy Colour', 'Vectors and fun', 'random/vivid-memories.gif', 'design', 'It\'s handheld!', '', '', ''),
(47, 'Gold Lizard', 'Cinema 4D', 'projects/3d/gold.jpg', 'design', 'It\'s a golden lizard', '', '', ''),
(48, 'Protect Yer Shit', 'Protect yer shit at all costs', 'random/knife.jpg', 'design-wide', 'Caffeine was invented by the CIA', '', '', ''),
(49, 'Playstation 2', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'playstationtwo.jpg', 'design', 'The PlayStation 2, released by Sony Computer Entertainment in 2000, stands as an iconic console that significantly shaped the landscape of gaming. Boasting a sleek black design and powerful hardware for its time, the PS2 became the best-selling video game console in history, with a diverse library of over 3,800 games. Its introduction marked a paradigm shift with the inclusion of a built-in DVD player, enhancing its appeal beyond gaming enthusiasts. The PS2 featured innovative titles such as Grand Theft Auto: San Andreas, Final Fantasy X, and Metal Gear Solid 2, contributing to its lasting cultural impact. With its reliable performance, extensive game library, and multimedia capabilities, the PlayStation 2 remains a beloved classic, evoking nostalgia among gamers and securing its place as a legendary console in the history of video gaming.', '', '', ''),
(50, 'Stone Letters', 'SD', 'random/letters.jpg', 'design-large', 'SD', '', '', ''),
(51, 'Snowglobe', 'Just a globe', 'random/snowglobe.jpg', 'design', 'has snow in it', '', '', ''),
(52, '3 Apple Watches', 'Three watch designssss', 'random/watches.jpg', 'design-wide', '3 Watches', '', '', ''),
(53, 'Tagger Lizard', 'He bad', 'random/tagger.jpg', 'design-mid', 'Tagger Liz', '', '', ''),
(54, 'Vandal', '', '../uploads/img1707623367.jpeg', 'design-mid', 'turt', '', '', ''),
(56, 'NES Remote', 'Play Games', '../uploads/img1707620111.jpg', 'design', 'Click clack clock', '', '', ''),
(57, 'An Alien', 'He is wearing a hat', '../uploads/img1707623252.png', 'design', 'Hello earthlings', '', '', ''),
(58, 'Red Bird', '', '../uploads/img1707623324.jpg', 'design', '', '', '', ''),
(59, 'Vandal', '', 'random/turtle.jpg', 'design', '', '', '', ''),
(60, 'UFO', '*buzzing sine noises intensify*', '../uploads/img1707690731.jpg', 'design', '', '', '', ''),
(61, 'Mystical Mushroom', 'ooooo', '../uploads/img1707690811.png', 'design', '', '', '', ''),
(62, 'Microscope', 'look at stuff with it ', '../uploads/img1707690921.jpg', 'design-mid', '', '', '', ''),
(64, 'Truck', '', '../uploads/img1707759185.jpg', 'design', '', '', '', ''),
(65, 'Plane in Globe', '', '../uploads/img1707759197.jpg', 'design', '', '', '', ''),
(66, 'Gratatata', '', '../uploads/img1707759206.jpg', 'design', '', '', '', ''),
(67, 'MiniGrow', '', '../uploads/img1707759226.jpg', 'design', '', '', '', ''),
(70, 'ProFinishing', '', '../uploads/img1707759478.jpg', 'design-mid', '', '', '', ''),
(71, 'Rock Crawler', 'Jep gon jep', '../uploads/img1708099826.jpg', 'design-mid', 'Jep', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text NOT NULL,
  `profile_picture` varchar(255) NOT NULL,
  `cell` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `nickname`, `password`, `bio`, `profile_picture`, `cell`, `email`, `linkedin`, `instagram`) VALUES
(2, 'spencer', 'Spencer Dipi', 'potato', 'Develop, Design, Dipi', '../dist/contact/contactPhoto.jpeg', '(519) 694-9569', 'spencer@dipidomain.com', 'https://linkedin.com', 'https://instagram.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
