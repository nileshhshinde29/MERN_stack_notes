
function f1() {
    return new Promise((resolve, reject) => {
        fetchData()
            .then(res => resolve(res))
            .catch(r => reject(e))
    })
}

const fetchThreeData = () => {
    // Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))   using fetch  
    Promise.all(urls.map(url => axios.get(url)))
        .then(res => setData(prev => ({ ...prev, data1: res[0].data, data2: res[1].data, data3: res[2].data })))
        .catch(e => console.log(e))
}


async function f2() {

    await fetch()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}