class OurHttp {
    
    // Make an get request
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();

        return resData;
    }


    // Create post

    async post(url, data){
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type" : "apllication/json"
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();

        return resData;
    }

    async put(url, data){
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type" : "apllication/json"
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();

        return resData;
    }
    
    async delete(url){
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type" : "apllication/json"
            }
        })

        const resData = await "Resource Deleted";

        return resData;
    }


}