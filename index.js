import TurndownService from 'turndown';
import { readFile, readdir, writeFile, stat } from 'node:fs';
import path from 'path';

// 笔记本文件夹名称
const READ_PATH = 'D:/Notes/资料-html';
const SAVE_PATH = 'D:/Notes/资料-md';

const turndownService = new TurndownService();
let fileCount = 0;
let successCount = 0;

const start = () => {
  readdir(READ_PATH, (err, files) => {
    if (err) throw err;
    files.forEach(filename => {
      const filepath = path.join(READ_PATH, filename);
      stat(filepath, (err, stats) => {
        if (err) throw err;
        if (stats.isFile()) {
          readFile(filepath, 'utf8', (err, data) => {
            if (err) throw err;
            fileCount++;
            console.log('第 ' + fileCount + ' 个正在转换');
            const cleanReg = /[\r|\n|\b|\f|\t|\v]+/g; //去掉特殊符号
            const bodyReg = /\<body\>.*\<\/body\>/g; // 匹配 body

            const bodyStr = data.replace(cleanReg, '').match(bodyReg);
            const markdown = turndownService.turndown(bodyStr[0]);
            saveMarkdownFile(filename, markdown);
          });
        }
      });
    });
  });
};

const saveMarkdownFile = (filename, markdown) => {
  const mdFilename = filename.replace(/\.html$/g, '.md');
  const fileSavePath = path.join(SAVE_PATH, path.basename(mdFilename));
  writeFile(fileSavePath, markdown, err => {
    if (err) throw err;
    successCount++;
    console.log(`${successCount} 文件名：[${mdFilename}] 写入成功`);
  });
};

start();
