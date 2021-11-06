import { useState } from "react";
import CarListComponentItems from "./CarListComponentItem"

const CarListComponent: React.FC = () =>
{
    const [searchCar, setSearchCar] = useState('');
    const [showCars, setShowCars] = useState(false);

    const resetFlag = () => {
        if (showCars === true)
        setShowCars(false);
    }
    return <div>
        <form>
            <label>Search box</label>
            <input
            type="text"
            value={searchCar}
            onChange={(e) => setSearchCar(e.target.value)}
            />
                </form>
                <button onClick={(e) => setShowCars(true)}>Search</button>
            
        {<CarListComponentItems searchCar={searchCar} showCars={() => resetFlag()}/>}
    </div>
}


export default CarListComponent