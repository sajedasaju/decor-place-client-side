import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(isLoading)
    useEffect(() => {
        // setIsLoading(true);
        fetch('https://afternoon-fjord-70162.herokuapp.com/inventory')
            .then((response) => response.json())
            .then((data) => {

                setInventories(data)
                setIsLoading(false);
                // console.log("vitor", isLoading)


            });

    }, [inventories])
    return [inventories, setInventories, isLoading]
}
export default useInventories;