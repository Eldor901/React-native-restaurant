import yelp from "../api/yelp";
import { useState, useEffect } from "react";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMassage, setMessage] = useState("");


    const SearchApi = async (searchTerm)=> {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "leicester city"

                }
            });

            setResults(response.data.businesses);
        }catch (e) {
            console.log(e);
            setMessage("Something went wrong");
        }
    };

//    SearchApi("pasta");
    useEffect(()=>{
        SearchApi("food");
    }, []);

    return [SearchApi, results, errorMassage];
}
