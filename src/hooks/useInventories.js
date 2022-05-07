import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-fjord-70162.herokuapp.com/inventory')
            .then((response) => response.json())
            .then((data) => {

                setInventories(data)


            });

    }, [inventories])
    return [inventories, setInventories]
}
export default useInventories;