import { useState } from "react";
import useAxios from "./customhooks/useAxios";

function App() {
  const [postId, setPostId] = useState(9);
  const { response, loading, error, sendData } = useAxios({
    method: "get",
    url: `/public/v1/users/${postId}`,
    //Accepting any type of data from the backend
    headers: {
      accept: "*/*",
    },
  });
  console.log(response);

  const getNextPost = () => {
    setPostId(postId + 1);
    sendData();
  };
  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <h3>Name: {response?.data?.data?.name}</h3>
      <h3>id: {response?.data?.data?.id}</h3>
      <h3>Gender: {response?.data?.data?.gender}</h3>
      <h3>Email: {response?.data?.data?.email}</h3>
      <button onClick={() => getNextPost()}>Next </button>
    </div>
  );
}

export default App;
