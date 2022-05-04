import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then((response) => response.json())
            .then((data) => {

                setInventories(data)


            });

    }, [inventories])
    return [inventories, setInventories]
}
export default useInventories;