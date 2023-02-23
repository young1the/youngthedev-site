import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useTheme } from "@/lib/theme";
import Header from "@/components/layout/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  const { handleToggle } = useTheme();
  return (
    <>
      <Header onClick={handleToggle} />
      <Component {...pageProps} />
    </>
  );
}
