interface IPartnerProps {
    children: React.ReactNode
    content: string
}

export default function PartnerItem(props: IPartnerProps) {
    return (
        <div className="flex space-x-3">
            <div>{props.children}</div>
            <span>{props.content}</span>
        </div>
    )
}
