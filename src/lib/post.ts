import path from 'path';
import fs from 'fs';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import {
  remarkExtendedTable,
  extendedTableHandlers,
} from 'remark-extended-table';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';
import matter from 'gray-matter';
import { unified } from 'unified';

export async function getPostData(id: string) {
  const fullPath = path.join(path.resolve('src/lib/'), `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .use(remarkGfm)
    .use(remarkExtendedTable)
    .use(remarkRehype, null, {
      handlers: Object.assign({}, extendedTableHandlers),
    })
    .use(rehypeStringify)
    .use(emoji)
    .process(matterResult.content);
  const contentHtml = file.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
