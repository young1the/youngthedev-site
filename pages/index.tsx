import Head from "next/head";
import {useTrackScroll} from "@/lib/trackScroll";
import {
    NotionAPI,
    NotionData,
} from "@/lib/notionAPI";
import Hero from "@/components/contents/Hero/Hero";
import Soundbar from "@/components/layout/Soundbar/Soundbar";
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

export default function Home({notionCMS, trackList}: HomeProps) {
    const {
        soundbarWidth,
        currentTitle,
        trackRefs,
        titleIndex,
        onPlayClickHandler,
        onNextClickHandler,
        onPrevClickHandler,
        moveToDivElementByIndex,
    } = useTrackScroll(trackList);

    return (
        <>
            <Head>
                <title>youngthedev</title>
                <meta name="description" content="신입 프론트엔드 포트폴리오"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="w-full flex items-center justify-center sm:px-4 md:px-4 lg:p-0">
                {/*<Soundbar*/}
                {/*    width={soundbarWidth}*/}
                {/*    title={currentTitle}*/}
                {/*    titleIndex={titleIndex}*/}
                {/*    onNextClickHandler={onNextClickHandler}*/}
                {/*    onPrevClickHandler={onPrevClickHandler}*/}
                {/*/>*/}
                <div className="mt-[100px] w-full max-w-2xl mx-auto">
                    <Hero onClick={onPlayClickHandler} trackList={trackList} trackOnClick={moveToDivElementByIndex}/>
                    <NotionArticles notionCMS={notionCMS} trackRefs={trackRefs}/>
                    <div className="h-[100px] w-full"></div>
                </div>
            </div>
        </>
    );
}
