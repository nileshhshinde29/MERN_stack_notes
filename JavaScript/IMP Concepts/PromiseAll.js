import React from 'react'
import { useEffect } from 'react';

function PromiseAll() {

    const urls = [
        "http://interviewapi.ngminds.com/api/getAllProducts",
        "https://dog.ceo/api/breeds/image/random",
        "http://interviewapi.ngminds.com/api/getAllProducts",
    ];

    const [data, setData] = useState({})

    const fetchThreeData = () => {
        // Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))   using fetch  
        Promise.all(urls.map(url => axios.get(url)))
            .then(res => setData(prev => ({ ...prev, data1: res[0].data, data2: res[1].data, data3: res[2].data })))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        fetchThreeData()
    }, [])
    return (
        <></>
    )
}

export default PromiseAll