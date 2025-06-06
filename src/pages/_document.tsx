import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ReactElement, JSX } from "react";

export default function MyDocument(): ReactElement {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props: any) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ) as JSX.Element,
  };
};
