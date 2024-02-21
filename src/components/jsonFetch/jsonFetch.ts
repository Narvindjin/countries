const jsonFetchGet = async(url:string) => {
    try {
        const response = await fetch(url, {
            method: "GET",
        })
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) })
        }
        const objectResponse = await response.json();
        return objectResponse;
    } catch (error) {
        console.log(error);
        return null
    }
} 

export {jsonFetchGet}