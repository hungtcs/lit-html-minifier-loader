import webpack from 'webpack';
import { minify, Options as HtmlMinifierOptions } from 'html-minifier';

export interface LoaderOptions {
  debug?: boolean;
  htmlMinifierOptions?: HtmlMinifierOptions;
}

export default function LitHtmlMinifierLoader(this: webpack.LoaderContext<LoaderOptions>, source: string) {
  const { debug, htmlMinifierOptions = {} } = this.getOptions();

  const htmlWithTags = source.match(/html\s*`([^`]*)`/g);
  if (htmlWithTags === null) {
    return source;
  }

  htmlWithTags.forEach(htmlWithTag => {
    const html = htmlWithTag.replace(/^html\s*`/, '').replace(/`$/, '');
    const miniHtml = minify(html, { caseSensitive: true, collapseWhitespace: true, ...htmlMinifierOptions });

    if (debug) {
      console.log({ htmlWithTag, html, miniHtml });
    }

    source = source.replace(html, miniHtml);
  });


  return source;
}
