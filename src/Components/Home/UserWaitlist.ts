import axios from "axios";

const useWaitlist = () => {
  const post = (email: string) => {
    const data = {
      email: email,
    };

    axios
      .post("http://18.195.91.17:3000/subscribe", data,{
        headers: {
          'Content-Type': "application/json"
        }
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);

        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };
  return { post };
};

export default useWaitlist;
