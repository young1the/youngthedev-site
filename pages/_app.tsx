import type { AppProps } from "next/app";
import { useTheme } from "@/lib/theme";
import "@/styles/globals.css";
import Header from "@/components/layout/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  const { handleToggle } = useTheme();
  return (
    <>
      <Component {...pageProps} />
      <Header onClick={handleToggle} />
    </>
  );
}
