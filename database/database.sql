-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 03, 2024 at 07:54 PM
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
  `image_filename` varchar(255) NOT NULL,
  `content_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `project_id`, `image_filename`, `content_type`) VALUES
(16, 1, 'nesremote.jpg', 'img'),
(18, 2, 'snesremote.jpg', 'img'),
(19, 6, 'playstationtwo.jpg', 'img'),
(27, 31, 'projects/blitzed/blitzed_ad_1.jpg', 'img'),
(28, 31, 'projects/blitzed/blitzed_ad_2.jpg', 'img'),
(29, 31, 'projects/blitzed/blitzed_threads.jpg', 'img'),
(30, 71, 'projects/jeep/front.jpg', 'img'),
(31, 71, 'projects/jeep/back.jpg', 'img'),
(32, 40, 'projects/kavorka/instagram_2.jpg', 'img'),
(33, 40, 'projects/kavorka/instagram_1.jpg', 'img'),
(34, 40, 'projects/kavorka/instagram_3.jpg', 'img'),
(35, 40, 'projects/kavorka/kavorka_ad_1.jpg', 'img'),
(38, 40, 'projects/kavorka/logos.jpg', 'img'),
(39, 40, 'projects/kavorka/logo_slugs.jpg', 'img'),
(40, 40, 'projects/kavorka/logos_text.jpg', 'img'),
(41, 31, 'projects/blitzed/b_logo.jpg', 'img'),
(42, 31, 'projects/blitzed/type_logo.jpg', 'img'),
(44, 1, 'nes.jpg', 'img'),
(46, 2, 'snes.jpg', 'img'),
(47, 6, 'playstation.jpg', 'img'),
(48, 30, 'gamecube.jpg', 'img'),
(49, 31, 'projects/blitzed/blitzed_thumb.jpg', 'img'),
(50, 32, 'random/skull_digital_paint.jpg', 'img'),
(51, 34, 'viagra.jpg', 'img'),
(52, 35, 'blow.jpg', 'img'),
(53, 36, 'xbox.jpg', 'img'),
(54, 37, 'gameboysp.jpg', 'img'),
(55, 39, 'zapper.jpg', 'img'),
(57, 40, 'projects/kavorka/kavorka_ad_2.jpg', 'img'),
(58, 42, 'dilla.jpg', 'img'),
(60, 44, 'projects/hcad/ad_1.jpg', 'img'),
(61, 45, 'random/wall.jpg', 'img'),
(62, 46, 'random/vivid-memories.gif', 'img'),
(63, 47, 'projects/3d/gold.jpg', 'img'),
(64, 48, 'random/knife.jpg', 'img'),
(65, 49, 'playstationtwo.jpg', 'img'),
(66, 50, '../videos/4d_morph.mp4', 'video'),
(67, 51, 'random/snowglobe.jpg', 'img'),
(68, 52, 'random/watches.jpg', 'img'),
(69, 53, 'random/tagger.jpg', 'img'),
(70, 54, '../uploads/img1707623367.jpeg', 'img'),
(71, 56, '../videos/jeep.mp4', 'video'),
(72, 77, '../uploads/img1707623252.png', 'img'),
(74, 79, 'random/turtle.jpg', 'img'),
(75, 60, '../videos/ufo.mp4', 'video'),
(76, 61, '../uploads/img1707690811.png', 'img'),
(77, 62, '../uploads/img1707690921.jpg', 'img'),
(78, 64, '../uploads/img1707759185.jpg', 'img'),
(79, 65, '../uploads/img1707759197.jpg', 'img'),
(80, 66, '../uploads/img1707759206.jpg', 'img'),
(81, 67, '../uploads/img1707759226.jpg', 'img'),
(82, 70, '../uploads/img1707759478.jpg', 'img'),
(83, 71, '../uploads/img1708099826.jpg', 'img'),
(86, 44, 'projects/hcad/dice.jpg', 'img'),
(87, 44, 'projects/hcad/domino.jpg', 'img'),
(88, 44, 'projects/hcad/card.jpg', 'img'),
(90, 41, 'projects/3d/lizard.jpg', 'img'),
(91, 0, '../dist/uploads/img1708984987.png', 'img'),
(92, 0, '../dist/uploads/img1708984987.png', 'img'),
(93, 75, 'projects/hcad/video/video_ad.mp4', 'video'),
(94, 44, 'projects/hcad/video/video_ad.mp4', 'video'),
(95, 76, 'nesremote.jpg', 'img'),
(96, 78, '../uploads/img1707623324.jpg', 'img'),
(97, 65, '../videos/plane.mp4', 'video'),
(98, 80, '../videos/pro_fin_video_two.mp4', 'video'),
(99, 80, '../dist/projects/pro_fin/flyer.jpg', 'img'),
(100, 82, 'random/robot.jpg', 'img'),
(101, 81, 'random/pig_decks.jpg', 'img'),
(102, 80, '../videos/pro_fin_video_one.mp4', 'video'),
(103, 83, '../dist/uploads/img1709304267.mp4', 'video'),
(104, 84, '../dist/uploads/img1709304406.jpg', 'img'),
(105, 85, '../dist/uploads/img1709304963.jpg', 'img'),
(106, 86, '../dist/uploads/img1709305090.mp4', 'video'),
(107, 40, 'projects/kavorka/kavorka_ad_3.jpg', 'img');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `forward` varchar(5) NOT NULL,
  `for_id` int(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `display` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `content` varchar(255) NOT NULL,
  `moreinfo` text DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_on` int(4) NOT NULL,
  `extra` varchar(5) DEFAULT NULL,
  `extra_content` varchar(30) DEFAULT NULL,
  `extra_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `forward`, `for_id`, `title`, `description`, `display`, `type`, `content`, `moreinfo`, `created_by`, `created_on`, `extra`, `extra_content`, `extra_url`) VALUES
(1, '', 0, 'NES', 'The Nintendo Entertainment System (NES), released in 1985, stands as an iconic milestone in the history of video gaming. \n\n<br><br>Pioneering the revival of the video game industry after the infamous crash of 1983, the NES introduced classic titles such as Super Mario Bros. and The Legend of Zelda. Its distinctive rectangular controller, simple yet engaging graphics, and memorable 8-bit music became synonymous with the era, fostering a generation of gamers and laying the foundation for the gaming landscape we know today. \n\n<br><br>The NES holds a cherished place in the hearts of many, serving as a timeless reminder of the joy and innovation that sparked a revolution in home entertainment.', 'nes.jpg', 'design', 'img', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'Spencer Dipi', 2023, '', '', ''),
(2, '', 0, 'SNES', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'snes.jpg', 'design', 'img', 'The Super Nintendo Entertainment System (SNES) holds an iconic place in the realm of gaming, released by Nintendo in 1990 as the successor to the original Nintendo Entertainment System (NES). Boasting 16-bit graphics and a vibrant color palette, the SNES delivered a significant leap in gaming visuals, providing players with a more immersive experience. The console featured a rich library of classic games such as Super Mario World, The Legend of Zelda: A Link to the Past, and Super Metroid, which are still celebrated today for their timeless gameplay and memorable characters. The SNES remains a nostalgic gem, cherished by gamers for its contributions to the Golden Age of video gaming.\n\n\n\n\n', 'Spencer Dipi', 2023, '', '', ''),
(6, '', 0, 'Playstation', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'playstation.jpg', 'design', 'img', 'The original PlayStation, released by Sony in 1994, marked a groundbreaking era in the world of gaming. Its sleek, gray design and cutting-edge CD-ROM technology set it apart from its cartridge-based predecessors. Boasting iconic titles like \"Final Fantasy VII,\" \"Metal Gear Solid,\" and \"Resident Evil,\" the PlayStation revolutionized the gaming landscape, introducing 3D graphics and immersive storytelling. Its introduction of the DualShock controller, with its innovative analog sticks and vibration feedback, further enhanced the gaming experience. The original PlayStation not only laid the foundation for Sony\'s dominance in the gaming industry but also left an indelible mark on the hearts of gamers worldwide.', 'Spencer Dipi', 2023, '', '', ''),
(30, '', 0, 'GameCube', 'GC', 'gamecube.jpg', 'design', 'img', 'The PlayStation 2, released by Sony Computer Entertainment in 2000, stands as an iconic console that significantly shaped the landscape of gaming. Boasting a sleek black design and powerful hardware for its time, the PS2 became the best-selling video game console in history, with a diverse library of over 3,800 games. Its introduction marked a paradigm shift with the inclusion of a built-in DVD player, enhancing its appeal beyond gaming enthusiasts. The PS2 featured innovative titles such as Grand Theft Auto: San Andreas, Final Fantasy X, and Metal Gear Solid 2, contributing to its lasting cultural impact. With its reliable performance, extensive game library, and multimedia capabilities, the PlayStation 2 remains a beloved classic, evoking nostalgia among gamers and securing its place as a legendary console in the history of video gaming.', 'Spencer Dipi', 2023, '', '', ''),
(31, '', 0, 'Blitzed', 'Blitzed.ca is a branding/ web/ learning venture.', 'projects/blitzed/blitzed_thumb.jpg', 'design', 'img', 'Originally a marketplace for independent glass artists to network/ make sales. This site never seemed to go anywhere. There\'s still hope!!', 'Spencer Dipi', 2016, '', '', ''),
(32, '', 0, 'Digital Painting - Skull', 'Hand drawn in ProCreate on iPad', 'random/skull_digital_paint.jpg', 'design', 'img', 'Vibrant, macabre, fun', 'Spencer Dipi', 2022, '', '', ''),
(34, '', 0, 'Never Obsolete', 'This is a (somewhat) minimalistic, isometric take. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'viagra.jpg', 'design', 'img', 'It\'s a floppy disk.', 'Spencer Dipi', 2023, '', '', ''),
(35, '', 0, 'Blow on it', 'This is a (somewhat) minimalistic, isometric take. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'blow.jpg', 'design', 'img', 'Video games will rot your brain.', 'Spencer Dipi', 2023, '', '', ''),
(36, '', 0, 'Xbox', 'The original Xbox, released by Microsoft on November 15, 2001, marked the tech giant\'s entry into the console gaming market. Boasting impressive hardware for its time, including an 8GB hard drive and an Intel Pentium III processor, the Xbox aimed to compete with established players like Sony\'s PlayStation 2 and Nintendo\'s GameCube. One of its standout features was its robust online multiplayer capabilities through Xbox Live, setting the stage for the online gaming experiences we know today. The console also introduced the iconic Duke controller, later replaced by the more compact Controller S. With titles like \"Halo: Combat Evolved\" that became synonymous with the platform, the original Xbox left a lasting impact on the gaming industry.', 'xbox.jpg', 'design', 'img', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'Spencer Dipi', 2023, '', '', ''),
(37, '', 0, 'GameBoy SP', 'The Game Boy Advance SP (GBA SP) is a portable gaming console released by Nintendo in 2003. It is a compact and foldable version of the Game Boy Advance, featuring a clamshell design with a backlit screen that enhances visibility in various lighting conditions. The SP introduced a rechargeable lithium-ion battery, providing convenience over the use of disposable batteries in its predecessor. With a diverse library of games ranging from classic titles to innovative releases, the Game Boy Advance SP remains a cherished device for gaming enthusiasts, offering a nostalgic and portable gaming experience.', 'gameboysp.jpg', 'design', 'img', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'Spencer Dipi', 2023, '', '', ''),
(39, '', 0, 'Zapper', 'The Nintendo Zapper is a light gun accessory designed for use with the Nintendo Entertainment System (NES), first released in 1985. It became iconic for its distinctive design, resembling a futuristic firearm, and its use in popular games like Duck Hunt. The Zapper operates by detecting light from the television screen when the trigger is pulled, allowing players to interact with on-screen targets. While initially bundled with the NES in some packages, the Nintendo Zapper has since become a nostalgic symbol of early video gaming, reflecting the charm and simplicity of classic gaming peripherals.', 'zapper.jpg', 'design-mid', 'img', '\"Ceci n\'est pas une pipe\" is a famous surrealist painting by René Magritte. Translated as \"This is not a pipe\" in English, the artwork challenges the viewer\'s perception by depicting a pipe accompanied by the contradictory text. Magritte intended to highlight the distinction between representation and reality, prompting viewers to consider the gap between the physical object and its artistic representation, urging contemplation on the nature of art and language.', 'Spencer Dipi', 2023, '', '', ''),
(40, '', 0, 'KAVORKA', 'KAVORKA also has a 4-letter text logo which can be used as a secondary or complimentary logo in combination with the full lettered brand name.<br><br>\n\n*Just remember all caps when you spell the brand’s name:\nWhether you use full spelling (KAVORKA) or the 4-letter(KVKA): KAVORKA is always written in capital letters.', 'projects/kavorka/kavorka_ad_2.jpg', 'design-large', 'img', 'KAVORKA branding embraces simplicity and contrast for our brand image. Relying heavily on symetrical components, as found in the text logo and icons. Our packaging takes advantage of rotational repitition so consumers can read our logo regardless of the orientation of the box they might be seeing.<br><br>\n\nAccordingly, we embrace unconventional design choices like heavy strokes and deep contrast so our products standout even amongst a distracting fog of com-petitors commonly found on store shelves. In conjunction with our coloring scheme of predominantly yellow and black, we stand out like a taxi cab.', 'Spencer Dipi', 2021, 'true', 'pdf', 'dist/pdf/kavorka_styleguide.pdf'),
(41, '', 0, 'Lizard Man', 'Made in cinema4D', 'projects/3d/lizard.jpg', 'design', 'img', 'Features rigged hands, and semi-rigged facial expressions.', 'Spencer Dipi', 2022, '', '', ''),
(42, '', 0, 'Dilla', 'Donut', 'dilla.jpg', 'design', 'img', 'MPC', 'Spencer Dipi', 2023, '', '', ''),
(43, '', 0, 'Alien', 'Out of this world', 'random/alien.gif', 'design', 'img', 'KFC bucket', 'Spencer Dipi', 2021, '', '', ''),
(44, '', 0, 'It\'s Not a Game', 'Not a game', 'projects/hcad/ad_1.jpg', 'design', 'img', 'Health Canada ad for marijuana use.', 'Spencer Dipi and Leila Akbari', 2024, NULL, '', ''),
(45, '', 0, 'Metal Wall', 'This is just a wall.', 'random/wall.jpg', 'design-mid', 'img', 'Nothing to see here. Stay out.', 'Spencer Dipi', 2023, '', '', ''),
(46, '', 0, 'GameBoy Colour', 'Vectors and fun', 'random/vivid-memories.gif', 'design', 'img', 'It\'s handheld!', 'Spencer Dipi', 2023, '', '', ''),
(47, '', 0, 'Gold Lizard', 'Cinema 4D', 'projects/3d/gold.jpg', 'design', 'img', 'It\'s a golden lizard', 'Spencer Dipi', 2022, '', '', ''),
(48, '', 0, 'Protect Yer Shit', 'Protect yer shit at all costs', 'random/knife.jpg', 'design-wide', 'img', 'Caffeine was invented by the CIA', 'Spencer Dipi', 2022, '', '', ''),
(49, '', 0, 'Playstation 2', 'This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.This is a (somewhat) minimalistic, isometric take on a classic game system. I made this in Adobe Illustrator, and added the subtle noise texture in photoshop.', 'playstationtwo.jpg', 'design', 'img', 'The PlayStation 2, released by Sony Computer Entertainment in 2000, stands as an iconic console that significantly shaped the landscape of gaming. Boasting a sleek black design and powerful hardware for its time, the PS2 became the best-selling video game console in history, with a diverse library of over 3,800 games. Its introduction marked a paradigm shift with the inclusion of a built-in DVD player, enhancing its appeal beyond gaming enthusiasts. The PS2 featured innovative titles such as Grand Theft Auto: San Andreas, Final Fantasy X, and Metal Gear Solid 2, contributing to its lasting cultural impact. With its reliable performance, extensive game library, and multimedia capabilities, the PlayStation 2 remains a beloved classic, evoking nostalgia among gamers and securing its place as a legendary console in the history of video gaming.', 'Spencer Dipi', 2023, '', '', ''),
(50, '', 0, '3D Morph', 'Cinema 4D + after effects', '../videos/4d_morph.mp4', 'design-large', 'video', 'Plastic is awesome.', 'Spencer Dipi', 2021, '', '', ''),
(51, '', 0, 'Snowglobe', 'Just a globe', 'random/snowglobe.jpg', 'design', 'img', 'has snow in it', 'Spencer Dipi', 2021, '', '', ''),
(52, '', 0, '3 Apple Watches', 'Three watch designssss', 'random/watches.jpg', 'design-wide', 'img', '3 Watches', 'Spencer Dipi', 2021, '', '', ''),
(53, '', 0, 'Tagger Lizard', 'He bad', 'random/tagger.jpg', 'design-mid', 'img', 'Tagger Liz', 'Spencer Dipi', 2022, '', '', ''),
(54, '', 0, 'Vandal', '', '../uploads/img1707623367.jpeg', 'design-mid', 'img', 'turt', 'Spencer Dipi', 2022, '', '', ''),
(56, '', 0, 'Rock Crawling', 'Slow and steady', '../videos/jeep.mp4', 'design-large', 'video', 'Engage the lockers', 'Spencer Dipi', 2021, '', '', ''),
(60, '', 0, 'UFO', '*buzzing sine noises intensify*', '../videos/ufo.mp4', 'design', 'video', '', 'Spencer Dipi', 2021, '', '', ''),
(61, '', 0, 'Mystical Mushroom', 'ooooo', '../uploads/img1707690811.png', 'design', 'img', '', 'Spencer Dipi', 2019, '', '', ''),
(62, '', 0, 'Microscope', 'look at stuff with it ', '../uploads/img1707690921.jpg', 'design-mid', 'img', '', 'Spencer Dipi', 2019, '', '', ''),
(64, '', 0, 'Truck', '', '../uploads/img1707759185.jpg', 'design', 'img', '', 'Spencer Dipi', 2019, '', '', ''),
(65, '', 0, 'Plane', 'Fly high', '../videos/plane.mp4', 'design', 'video', 'Made in Cinema 4D', 'Spencer Dipi', 2022, '', '', ''),
(66, '', 0, 'Gratatata', '', '../uploads/img1707759206.jpg', 'design', 'img', '', 'Spencer Dipi', 2021, '', '', ''),
(67, '', 0, 'MiniGrow', '', '../uploads/img1707759226.jpg', 'design', 'img', '', 'Spencer Dipi', 2018, '', '', ''),
(70, '', 0, 'ProFinishing', '', '../uploads/img1707759478.jpg', 'design-mid', 'img', '', 'Spencer Dipi', 2021, '', '', ''),
(71, '', 0, 'Rock Crawler', 'Jep gon jep', '../uploads/img1708099826.jpg', 'design-mid', 'img', 'Jep', 'Spencer Dipi', 2021, '', '', ''),
(75, 'true', 44, 'Health Canada Video Ad', '\r\nMarijuana, while gaining acceptance for its medicinal properties and evolving legal status in various regions, is not without its potential risks and harmful effects. <br><br>Smoking marijuana can lead to respiratory issues, as the combustion of plant material releases harmful substances into the lungs. Additionally, long-term use has been associated with cognitive impairments, especially in developing brains, impacting memory, attention, and learning. <br><br>Marijuana use can also be linked to mental health challenges, particularly in individuals predisposed to anxiety or psychosis. The psychoactive compound THC, responsible for the euphoric effects, can contribute to impaired judgment and coordination, posing risks in situations that demand alertness. <br><br>It is crucial to approach marijuana use with a clear understanding of its potential drawbacks and to recognize that, like any substance, moderation and informed decision-making are paramount to minimizing associated risks. <br><br>Smoking marijuana is not a game; it necessitates responsible consideration of its potential consequences on both physical and mental well-being.', 'projects/hcad/video/video_ad.mp4', 'design-large', 'video', 'Introducing our impactful video campaign created with After Effects, we embark on a crucial journey to shed light on the lesser-known dangers of smoking marijuana. <br><br>Join us in this eye-opening campaign as we strive to promote awareness, foster informed decision-making, and ultimately, contribute to a healthier, more informed community.\r\n\r\n\r\n\r\n', 'Spencer Dipi and Leila Akbari', 2024, NULL, NULL, NULL),
(76, 'yes', 1, 'NES Remote', 'Play Games', '../uploads/img1707620111.jpg', 'design', 'img', 'Click clack clock', 'Spencer Dipi', 2023, '', '', ''),
(77, '', 0, 'Alien', 'Out of this world', '../uploads/img1707623252.png', 'design', 'img', 'Don\'t breathe this.', 'Spencer Dipi', 2021, '', '', ''),
(78, '', 0, 'Red Bird', '', '../uploads/img1707623324.jpg', 'design', 'img', '', 'Spencer Dipi', 2019, '', '', ''),
(79, '', 0, 'Turtle Vandal', '', 'random/turtle.jpg', 'design', 'img', '', 'Spencer Dipi', 2022, '', '', ''),
(80, '', 0, 'ProFinishing', 'Demo after effects clip', '../videos/pro_fin_video_one.mp4', 'design', 'video', NULL, 'Spencer Dipi', 2019, NULL, NULL, NULL),
(81, '', 0, 'Pig Decks', 'Oink', 'random/pig_decks.jpg', 'design-mid', 'img', 'OINK', 'Spencer Dipi', 2018, NULL, NULL, NULL),
(82, '', 0, 'Robot', 'Vector Artwork', 'random/robot.jpg', 'design', 'img', 'Beep boop bop', 'Spencer Dipi', 2017, NULL, NULL, NULL),
(83, '', 0, 'Spraymen', 'Vandalize sh*t', '../dist/uploads/img1709304267.mp4', 'design', 'video', 'Hand drawn in ProCreate', 'Spencer Dipi', 2022, NULL, '0', '0'),
(84, '', 0, 'Chubby Checker', 'Created using Sculptris and Photoshop 3D studio', '../dist/uploads/img1709304406.jpg', 'design-wide', 'img', 'Oink', 'Spencer Dipi', 2017, NULL, '0', '0'),
(85, '', 0, 'Wax Candle Co.', 'Old venture', '../dist/uploads/img1709304963.jpg', 'design-large', 'img', 'Craft candles', 'Spencer Dipi', 2019, NULL, '0', '0'),
(86, '', 0, 'Face Rig', 'c4d', '../dist/uploads/img1709305090.mp4', 'design-wide', 'video', 'lizard', 'Spencer Dipi', 2020, NULL, '0', '0'),
(87, 'true', 40, 'KVKA', 'null', 'projects/kavorka/kavorka_thumb.jpg', 'design', 'img', 'null', 'null', 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text NOT NULL,
  `profile_picture` varchar(255) NOT NULL,
  `cell` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `github` varchar(45) NOT NULL,
  `artstation` varchar(255) NOT NULL,
  `codepen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `password`, `bio`, `profile_picture`, `cell`, `email`, `linkedin`, `instagram`, `github`, `artstation`, `codepen`) VALUES
(2, 'spencer', 'Spencer', 'Dipi', 'potato', 'Develop, Design, Dipi', '../dist/contact/contactPhoto.jpeg', '', 'spencer@dipidomain.com', 'https://www.linkedin.com/in/dipis', 'https://instagram.com/dipis', 'https://github.com/sdipis', 'https://www.artstation.com/spencerdips', 'https://codepen.io/dipis');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
