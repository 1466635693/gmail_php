-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 02, 2013 at 10:42 AM
-- Server version: 5.5.29
-- PHP Version: 5.3.10-1ubuntu3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gmail`
--
CREATE DATABASE `gmail` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gmail`;

-- --------------------------------------------------------

--
-- Table structure for table `gmail_login`
--

CREATE TABLE IF NOT EXISTS `gmail_login` (
  `user_id` int(10) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(150) NOT NULL,
  `valid` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gmail_login`
--

INSERT INTO `gmail_login` (`user_id`, `username`, `password`, `valid`) VALUES
(1, 'lalluanthoor', '5f4dcc3b5aa765d61d8327deb882cf99', 1),
(2, 'root', '7b24afc8bc80e548d66c4e7ff72171c5', 1);

-- --------------------------------------------------------

--
-- Table structure for table `gmail_mails`
--

CREATE TABLE IF NOT EXISTS `gmail_mails` (
  `mail_id` int(10) NOT NULL AUTO_INCREMENT,
  `from_user` varchar(200) NOT NULL,
  `to_user` varchar(200) NOT NULL,
  `mail_data` text NOT NULL,
  PRIMARY KEY (`mail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `gmail_users`
--

CREATE TABLE IF NOT EXISTS `gmail_users` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` text NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` char(1) NOT NULL,
  `mobile` char(15) NOT NULL,
  `prev_email` varchar(200) NOT NULL,
  `location` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `gmail_users`
--

INSERT INTO `gmail_users` (`user_id`, `first_name`, `last_name`, `date_of_birth`, `gender`, `mobile`, `prev_email`, `location`) VALUES
(1, 'Lallu', 'Anthoor', '1991-02-01', 'M', '7736116387', 'lalluanthoor@hotmail.com', 'india'),
(2, 'a', 'b', '1991-01-01', 'F', '7234123456', 'asd@gmail.com', 'india');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
