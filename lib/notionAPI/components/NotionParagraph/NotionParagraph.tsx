import {TextContent} from "@/lib/notionAPI";

interface NotionParagraphProps {
    content: TextContent;
}

const NotionParagraph = ({content}: NotionParagraphProps) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {content.rich_text.map((text, index) => {
                return (
                    text.annotations.bold ?
                        <span className="font-extrabold" key={index}>{text.plain_text}</span>
                        : <span key={index}>{text.plain_text}</span>

                );
            })}
        </p>
    );
};

export default NotionParagraph;
