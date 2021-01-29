-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 29 2021 г., 15:56
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `applications`
--

-- --------------------------------------------------------

--
-- Структура таблицы `плясунов_максим_игоревич`
--

CREATE TABLE `плясунов_максим_игоревич` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phonenumber` varchar(30) DEFAULT NULL,
  `sum_credit` int(4) DEFAULT NULL,
  `loan_term` int(4) DEFAULT NULL,
  `bid_month` int(4) DEFAULT NULL,
  `bid` int(12) DEFAULT NULL,
  `deadline` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `плясунов_максим_игоревич`
--

INSERT INTO `плясунов_максим_игоревич` (`id`, `name`, `phonenumber`, `sum_credit`, `loan_term`, `bid_month`, `bid`, `deadline`) VALUES
(1, 'Плясунов Максим Игоревич', '8-961-748-78-53', 500000, 24, 7, 37271, '29-12-2022');

-- --------------------------------------------------------

--
-- Структура таблицы `чуркин_захар_иванович`
--

CREATE TABLE `чуркин_захар_иванович` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phonenumber` varchar(30) DEFAULT NULL,
  `sum_credit` int(4) DEFAULT NULL,
  `loan_term` int(4) DEFAULT NULL,
  `bid_month` int(4) DEFAULT NULL,
  `bid` int(12) DEFAULT NULL,
  `deadline` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `чуркин_захар_иванович`
--

INSERT INTO `чуркин_захар_иванович` (`id`, `name`, `phonenumber`, `sum_credit`, `loan_term`, `bid_month`, `bid`, `deadline`) VALUES
(1, 'Чуркин Захар Иванович', '12-12-45', 100000, 12, 20, 11161, '29-12-2021');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `плясунов_максим_игоревич`
--
ALTER TABLE `плясунов_максим_игоревич`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `чуркин_захар_иванович`
--
ALTER TABLE `чуркин_захар_иванович`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `плясунов_максим_игоревич`
--
ALTER TABLE `плясунов_максим_игоревич`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `чуркин_захар_иванович`
--
ALTER TABLE `чуркин_захар_иванович`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
