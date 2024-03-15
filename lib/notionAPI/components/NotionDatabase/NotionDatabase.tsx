import {Database} from "../../types";
import style from "./NotionDatabase.module.css";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import NotionTitle from "@/lib/notionAPI/components/NotionTitle/NotionTitle";

interface NotionDatabaseProps {
    content: Database;
}

const NotionDatabase = ({content}: NotionDatabaseProps) => {
    return (
        <a
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card className="w-full">
                <CardHeader></CardHeader>
                <CardContent>
                    <div className={style.imageContainer}>
                        <img src={content.cover} alt="thumbnail" className={style.thumbnail}/>
                    </div>
                    <div className={style.infoContainer}>
                        <NotionTitle value={content.properties.이름.title[0].plain_text}></NotionTitle>
                        <ul className={style.stackContainer}>
                            {content.properties.stacks.multi_select.map((stack) => (
                                <Badge key={stack.id}>{stack.name}</Badge>
                            ))}
                        </ul>
                        <h4>
                            {content.properties.description.rich_text.reduce((acc, ele) => {
                                return acc + ele.plain_text;
                            }, "")}
                        </h4>
                    </div>
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </a>
    );
};

export default NotionDatabase;
