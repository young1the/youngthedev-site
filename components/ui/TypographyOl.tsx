interface TypographyOlProps {
    items: string[];
}

export function TypographyOl({items}: TypographyOlProps) {
    return (
        <ul className="my-6 ml-6 list-decimal [&>li]:mt-2">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}
