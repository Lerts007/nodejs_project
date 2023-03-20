const fs = require("fs");

//Создание папки с файлом
// fs.mkdir("text-files", () => {
//   fs.writeFile("./text-files/some.txt", "Hello", () => {});
// });

//Удаление папки. Удалить папку с содержимым нельзя, нужно сначала удалить её содержимое, а после папку
fs.unlink("./text-files/some.txt", () => {
  fs.rmdir("./text-files", () => {});
});
