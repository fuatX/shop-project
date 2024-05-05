import React from "react";
import useAxiosHook from "../Components/axiosAPI/axiosHook";
import LoadingComponent from "../Components/LoadingComponent";
import Categorys from "../Components/Categorys/Categorys";

export default function HomePage() {
  const { data, loading, isError, errorMessage } = useAxiosHook();

  if (isError) {
    return <h2>{errorMessage}</h2>;
  }

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="col-sm-8 offset-sm-2">
      <h1>Welcome to Sword Shop!</h1>
      <div>
        {data.map((item, index) => (
          <Categorys item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
