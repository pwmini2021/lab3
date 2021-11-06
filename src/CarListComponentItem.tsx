import { useState } from "react";
import { CARS } from "./data/Car"

interface Props{
    searchCar: string
    showCars: Function
}

const CarListItemsComponent = (params: Props) => {

    const deleteCar = (key: number) =>
    {
        console.log(key);
        setCars(cars.filter(x => (x.key === key) === false));
    }
    const [cars, setCars] = useState(CARS.filter(data => data.name.toLowerCase().indexOf({params}.params.searchCar.toLowerCase()) > -1).map((data, key) => {
        return (
                <CarListItemComponent
                    image={data.image}
                    AC={data.AC}
                    name={data.name}
                    pricePerDay={data.pricePerDay}
                    seats={data.seats}
                    doors={data.doors}
                    deleteCar={deleteCar}
                    index={key}                       
                />)}));
    return <div>
            {{cars}.cars.filter(x => x.props.name.toLowerCase().includes({params}.params.searchCar.toLowerCase()))}
    </div>
}

interface CarComponentProps
{
    name: string;
    pricePerDay: number;
    seats: number;
    doors: number;
    image: string;
    AC: boolean;
    deleteCar: Function;
    index: number;
}
const CarListItemComponent = (props: CarComponentProps) =>{
    
    return <table>
        <tbody>
        <tr>
        <td>
                    <img src={props.image} alt="new" height="100" width="150"/>
                </td>
            <td>
                AC: {props.AC.toString()},
                </td>
                <td>
                    Name: {props.name},
                </td>
                <td>
                    Seats: {props.seats},
                </td>
                <td>
                    Doors: {props.doors},
                </td>
                <td>
                    Price per day: {props.pricePerDay}
                </td>
                <td>
                    <button onClick={(e) => {props.deleteCar(props.index)}}>Delete</button>
                </td>
                <td>
                    {props.index}
                </td>
        </tr>
        </tbody>
    </table>
}

export default CarListItemsComponent