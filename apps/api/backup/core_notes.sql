-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 01, 2024 at 06:25 AM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `core_notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
CREATE TABLE IF NOT EXISTS `notes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `color` varchar(10) NOT NULL,
  `favorite` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `content`, `color`, `favorite`) VALUES
(1, 'Lista de Compras', 'Leite, Ovos, Pão, Maçãs', '#bae2ff', 1),
(2, 'Ideias para o Projeto', 'Pesquisar sobre machine learning, fazer brainstorming com a equipe', '#b9ffdd', 0),
(3, 'Lembrete para a Reunião', 'Reunião às 15:00h na sala de conferência', '#daff8b', 1),
(4, 'Citação Inspiradora', 'O sucesso é a soma de pequenos esforços repetidos dia após dia.', '#979797', 0),
(5, 'Receita para o Jantar', 'Lasanha de frango', '#f99494', 1),
(6, 'Tarefas do Dia', 'Responder e-mails, preparar relatório mensal, ir à academia', '#ffa285', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
