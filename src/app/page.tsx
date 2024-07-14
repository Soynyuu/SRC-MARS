import StationNameInput from './StationNameInput'
import DynamicSVGStationName from "./StationNameInput";

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">SRC-切符プレイグラウンド</h1>
            < DynamicSVGStationName />
        </div>
    )
}
