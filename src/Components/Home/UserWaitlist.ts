


const useWaitlist = ()=>{
    const post = (email:string)=> {
        const data = {
                    email: email
        }
        
        const dataPost = JSON.stringify(data)
        console.log(dataPost)
        fetch("https://sendnaw-api.onrender.com/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: dataPost
        })
        .then(res => {
            if (res.status === 200 ){ 
            console.log("Success") 
        }else {
            console.log(res)
        }})
        .catch(err => console.log(err))

    }
    return { post }
}

export default useWaitlist;