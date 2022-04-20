# CityBikes

Приложение демонстрирует работу React JS с API [http://api.citybik.es/v2/](http://api.citybik.es/v2/)

Рабочая область приложения состоит из двух колонок.

В левой колонке отображается список компаний, предоставляющих услуги проката велосипедов. Некоторые компании объединены в сети.

В правой колонке отображается информация о сети, в которую входит выбранная компания, а также список станций проката с адресами (если они указаны) и ссылками на местоположение станций в Google Maps.

Станции можно вносить в список понравившихся. Для этого нужно нажать иконку сердечка слева от названия станции. Иконка поменяет цвет с серого на красный. Список понравившихся станций хранится в local storage.

Проект был создан с использованием [Create React App](https://github.com/facebook/create-react-app).

## Инструменты

В приложении используются:

+ React

+ React Redux

+ Thunk

+ Typescript

+ Local Storage

## Запуск приложения

Для запуска используются стандартные скрипты CRA:

+ `yarn`

Устанавливает зависимости.

+ `yarn start`

Запускает тестовый вариант приложения. Откройте [http://localhost:3000](http://localhost:3000) для просмотра приложения в браузере.

+ `yarn build`

Выполняет сборку приложения.
