

interface ICountdownTimerProps  {
    label:string;
    value:string;
}

export default function CountdownTimerItem(props:ICountdownTimerProps) {
    return (
        <div className="flex flex-col text-white  p-2">
            <h2 className="font-medium text-xl">{props.value}</h2>
            <span className="font-light text-sm">{props.label}</span>
        </div>
    )
}