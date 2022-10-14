# React SPA приложение - заказ VPS

Тестовое задание: Необходимо реализовать SPA (Single Page Application) с одной страницей «Заказ VPS». 
Приложение должно быть написано на React Javascript  (желательно использовать Redux). 
Кроме исходных кодов необходимо закачать билд на какой-нибудь хостинг для проверки 
через браузер. Верстка под десктоп является обязательным заданием. Реализация под 
планшет и мобильник будет дополнительным плюсом.

Макет страницы 
https://www.figma.com/file/BW9QLYORlGJUXaG9bqyS4X/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-front-end-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0?node-id=0%3A1

Шрифт Proxima Nova (как на основном сайте https://sweb.ru/ )

Данные о тарифах необходимо запрашивать через API.
Получение списка доступных тарифов:

URL: https://api.sweb.ru/notAuthorized/
POST: {"jsonrpc":"2.0","method":"vpsOsConfig","params":{}}

Возвращаемые значение в элементах массива:
```
- 'vpsPlans' array Тарифные планы
- 'selectOs' array Операционные системы 
- 'selectPanel' array Панели управления 
- 'osPanel' array Дистрибутивы (операционная система+панель)
- 'datacenters' array Доступные датацентры
- 'categories' array Категории тарифных планов
```

Для запуска локально, выполните:

```
npm install
npm start
```

https://vps-order.netlify.app/
