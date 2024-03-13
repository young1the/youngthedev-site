import Head from "next/head";
import { useTrackScroll } from "@/lib/trackScroll";
import {
  NotionAPI,
  NotionPageRenderer,
  NotionDatabaseRenderer,
  Database,
  NotionData,
  Page,
} from "@/lib/notionAPI";
import Hero from "@/components/contents/Hero/Hero";
import Soundbar from "@/components/layout/Soundbar/Soundbar";
import Article from "@/components/contents/Article/Article";
import Title from "@/components/text/Title/Title";
import { useMemo } from "react";
import NotionArticles from "@/components/contents/NotionArticles/NotionArticles";

interface HomeProps {
  notionCMS: NotionData[];
  trackList: string[];
}

export async function getStaticProps() {
  const notionCMS = await NotionAPI.getCMS();
  const trackList = notionCMS.filter(ele => !!ele).map((ele) => ele.title);
  return {
    props: {
      notionCMS,
      trackList,
    },
  };
}

export default function Home({ notionCMS, trackList }: HomeProps) {
  const {
    soundbarWidth,
    currentTitle,
    trackRefs,
    titleIndex,
    onPlayClickHandler,
    onNextClickHandler,
    onPrevClickHandler,
  } = useTrackScroll(trackList);

  return (
    <>
      <Head>
        <title>youngthedev</title>
        <meta name="description" content="신입 프론트엔드 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <Hero onClick={onPlayClickHandler} trackList={trackList} />
        <Soundbar
          width={soundbarWidth}
          title={currentTitle}
          titleIndex={titleIndex}
          onNextClickHandler={onNextClickHandler}
          onPrevClickHandler={onPrevClickHandler}
        />
        <NotionArticles notionCMS={notionCMS} trackRefs={trackRefs} />
      </div>
    </>
  );
}
