# 本地 HTML 批量转换为 Markdown 格式

## 需求分析

用于 Evernote 导出笔记迁移到 Obsidian

Update：直接使用 [evernote2md](https://github.com/wormi4ok/evernote2md) 将`.enex`转换为`.md`即可。Evernote `6.xx` 旧版本可以一次性导出全部笔记。

1. Evernote 每条笔记导出为单个 HTML 文件，每个文件夹对应一个笔记本
2. Node.js 读取每个 HTML 转换为 Markdown 格式到指定目录
3. 复制 Markdown 文件夹到 Obsidian 目录下

## 功能设计

Node.js 读取每个 HTML 转换为 Markdown 格式到指定目录

1. 列出目录下所有文件名
2. 以 UTF-8 字符串方式读取每个文件
3. Turndown.js 转换为 Markdown
4. 写入指定本地文件夹

## 使用

1. `yarn install`
2. `index.js:6` 填入 Evernote 导出的 html 文件夹
3. `index.js:7` 填入输出文件夹（手动创建好的）
4. `yarn dev`
5. 终端查看进度
