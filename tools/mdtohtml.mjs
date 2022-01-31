import * as fs from 'fs/promises';
import  MarkdownIt from 'markdown-it';

let filename_in = 'home.md';
let filename_out= 'home.html';

async function markdown_import(filename_in) {
  let markdown_string;
  try {
    markdown_string = await fs.readFile(filename_in, 'utf8');
  }
  catch(e) {
    throw e;
  }
  return (markdown_string);
}

async function html_export(markdown_string, filename_out) {
  try{
    let md = new MarkdownIt();
    let html_string = md.render(markdown_string);
    // TODO: check html string (e.g. size)
    await fs.writeFile(filename_out,html_string, 'utf8');
  }
  catch(e) {
    throw e;
  }
}

async function markdownToHtml(filename_in, filename_out) {
  try {
    let markdown_string = await markdown_import(filename_in);
    await html_export(markdown_string, filename_out);
  }
  catch (e) {
    console.error(`Error: ${e.message}`);
  }
}

markdownToHtml(filename_in, filename_out);

// TODO: Add description of gotchas in throwing in async functions and
//       why adding await to the call markdown_import was important
//       https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a