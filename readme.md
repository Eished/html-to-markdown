# 本地 HTML 批量转换为 Markdown 格式

## 需求分析

用于 Evernote 导出笔记迁移到 Obsidian

1. Evernote 每条笔记导出为单个 HTML 文件，每个文件夹对应一个笔记本
2. Node.js 读取每个 HTML 转换为 Markdown 格式到指定目录
3. 复制 Markdown 文件夹到 Obsidian 目录下

## 功能设计

Node.js 读取每个 HTML 转换为 Markdown 格式到指定目录

1. 列出目录下所有文件名
2. 以 UTF-8 字符串方式读取每个文件
3. Turndown.js 转换为 Markdown
4. 写入指定本地文件夹
