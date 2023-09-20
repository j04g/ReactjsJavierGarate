import axios from 'axios';
const searchImage = async () => {
    const response = await axios.get ("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID 5XgP-tICeleLj13QBVH-vremEQAFTDH7_hnzOfXfJsM"
        },
        params:{
            query: "Pastry"
        }
    })
    console.log(response.data.results);
    return response
};
export default searchImage;
