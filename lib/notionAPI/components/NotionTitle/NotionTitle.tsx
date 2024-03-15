interface NotionTitleProps {
    value: string;
}

const NotionTitle = ({value}: NotionTitleProps) => {
    return <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        {value}
    </h2>
};

export default NotionTitle;
