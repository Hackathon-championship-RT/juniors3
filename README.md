/* При запуске проекта: */
npm i 
/* Запуск фронта: 
cd frontend 
npm i 
npm run dev */
/* Нужно установить Postgre SQL, создать базу данных Mahjong и создать таблицу командой: 
create table results(
    id         serial
        constraint results_pk
            primary key,
    name       text    not null,
    time       integer not null,
    reshuffles integer not null,
    difficulty text    not null
); */
/* Запуск бэка:
  npm i
  npm start*/ 

