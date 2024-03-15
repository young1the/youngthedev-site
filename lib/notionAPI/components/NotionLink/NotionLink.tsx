import {LinkPreviewType} from "@/lib/notionAPI";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface NotionLinkProps {
    content: LinkPreviewType;
}

const NotionLink = ({content}: NotionLinkProps) => {
    return (
        <a
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card className="w-full">
                <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/github.png"/>
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">GitHub Link</h4>
                            <p className="text-sm">
                                {content.url}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </a>
    );
};

export default NotionLink;
