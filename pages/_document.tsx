import { Html, Head, Main, NextScript } from "next/document";
import { themeInitializerScript } from "@/lib/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
