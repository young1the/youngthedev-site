import Head from "next/head";
import { useEffect, useRef } from "react";
import { useTrackScroll } from "@/lib/trackScroll";
import Hero from "@/components/contents/Hero/Hero";
import Soundbar from "@/components/contents/Soundbar/Soundbar";
import Article from "@/components/contents/Article/Article";
import { NotionAPI } from "@/lib/notionAPI";
import NotionPage from "@/components/contents/NotionPage/NotionPage";

export async function getStaticProps() {
  const seoulArticle = await NotionAPI.getArticleContents("seoul");
  const wantedArticle = await NotionAPI.getArticleContents("wanted");
  const projects = await NotionAPI._getDatabaseWithQuery();
  return { props: { seoulArticle, wantedArticle, projects } };
}

export default function Home({ seoulArticle, wantedArticle, projects }: any) {
  const { soundbarWidth, currentTitle } = useTrackScroll();
  const first = useRef<HTMLDivElement>(null);
  const onClick = () => {
    first?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          marginTop: "100px",
          position: "relative",
        }}
      >
        <Hero onClick={onClick} />
        <Soundbar width={soundbarWidth} title={currentTitle} />
        <Article ref={first} color="red" />
        <Article color="yellow">
          <NotionPage list={seoulArticle} />
        </Article>
        <Article color="green">
          <NotionPage list={wantedArticle} />
        </Article>
        <Article color="blue" />
        <Article color="purple" />
      </div>
    </>
  );
}
