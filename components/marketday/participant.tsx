
interface IParticipantProps {
    currentValue:string;
}

export default function Participant(props:IParticipantProps) {
    return (
        <div>
            <h2 className='font-bold mb-4'>Live Participant Count</h2>
            <div className="rounded-xl p-3 h-[85px] flex flex-col items-center justify-center text-white bg-[#063d25]">
                <h2 className="font-medium text-xl">{props.currentValue}</h2>
                <span className="text-sm">Registered Vendors</span>
            </div>
        </div>
    )
}
