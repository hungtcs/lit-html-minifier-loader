import webpack from 'webpack';

export interface LoaderOptions {
  debug?: boolean;
  disabled?: boolean;
}

export default function LitHtmlMinifierLoader(this: webpack.LoaderContext<LoaderOptions>, source: string) {
  const { debug, disabled } = this.getOptions();

  if (disabled) {
    return source;
  }

  const htmlWithTags = source.match(/html\s*`([^`]*)`/g);
  if (htmlWithTags === null) {
    return source;
  }

  htmlWithTags.forEach(htmlWithTag => {
    const html = htmlWithTag.replace(/^html\s*`/, '').replace(/`$/, '');
    const miniHtml = html.replace(/\s+/g, ' ');

    if (debug) {
      console.log({ htmlWithTag, html, miniHtml });
    }

    source = source.replace(html, miniHtml);
  });


  return source;
}
