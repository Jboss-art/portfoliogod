-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 23 juil. 2024 à 22:57
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `espace_membres`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` text NOT NULL,
  `mdp` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `mdp`) VALUES
(1, 'malachi@moi.com', 'cc1809ed735090533b7ba23d3aebe26d30b0a14c'),
(2, 'malachi@moi.com', '55cbe7fd00627a28668d1d7c9899bdb602dad69d'),
(3, 'joker@moi.com', '55cbe7fd00627a28668d1d7c9899bdb602dad69d'),
(4, 'ali@gmail.com', '7a85f4764bbd6daf1c3545efbbf0f279a6dc0beb'),
(5, 'melvin@gmail.com', 'a437a89ef9b63008e80c6697936a8275c54b0a6c'),
(6, 'test@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3'),
(7, 'mlmlmlm@ok.fr', '9b7569e728aa0ca38d80b4c0eb406e7ec60000b7'),
(8, 'groupe@gmail.com', '$2y$10$y4rZbjKQIDA9Li/07pl2sewi/mXMWjHaww2i1NssiVuMiDbKbaMIy'),
(9, 'groupe2@gmail.com', '0c52dc77f8a5b2ae6e7c7938521ed5fd26ebb8a8'),
(10, 'groupe2@gmail.com', '0c52dc77f8a5b2ae6e7c7938521ed5fd26ebb8a8'),
(11, 'groupe2@gmail.com', '0c52dc77f8a5b2ae6e7c7938521ed5fd26ebb8a8'),
(12, 'groupe2@gmail.com', '0c52dc77f8a5b2ae6e7c7938521ed5fd26ebb8a8'),
(13, 'gold@gmail.com', '$2y$10$C68kZzcvhWHhny5KPQIAQudqNA.UoWfbpNyAlZn3IOFg0juZ9VyVu'),
(14, 'jhhkhj', '$2y$10$xl3O7o3yDpIjQ7cnGZUpVex2gLww9S2fVYKtoH6CIVxkHLtPdSIL.'),
(15, 'test@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
