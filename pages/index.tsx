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
import Soundbar from "@/components/contents/Soundbar/Soundbar";
import Article from "@/components/contents/Article/Article";
import Title from "@/components/text/Title/Title";

interface HomeProps {
  notionCMS: NotionData[];
  trackList: string[];
}

export async function getStaticProps() {
  const notionCMS = await NotionAPI.getCMS();
  const trackList = notionCMS.map((ele) => ele.title);
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
          onNextClickHandler={onNextClickHandler}
          onPrevClickHandler={onPrevClickHandler}
        />
        {notionCMS.map((data, index) => {
          let content;
          if (data.type === "child_page") {
            content = (
              <NotionPageRenderer
                key={data.id + "content"}
                content={data.content as Page[]}
              />
            );
          } else {
            content = (
              <NotionDatabaseRenderer
                key={data.id + "content"}
                content={data.content as Database[]}
              />
            );
          }
          return (
            <Article
              key={data.id}
              ref={(ref) => (trackRefs.current[index] = ref)}
            >
              <Title key={data.id + "title"} value={data.title} />
              {content}
            </Article>
          );
        })}
      </div>
    </>
  );
}
