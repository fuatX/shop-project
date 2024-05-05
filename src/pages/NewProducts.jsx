import React from "react";
import useAxiosHook from "../Components/axiosAPI/axiosHook";
import LoadingComponent from "../Components/LoadingComponent";
import Categorys from "../Components/Categorys/Categorys";

export default function NewProducts() {
  // const { data, loading, isError, errorMessage } = useAxiosHook();

  return (
    <div className="col-sm-12">
      <h1>newto Sword Shop!</h1>
      <ul>
        {data.map((item, index) => (
          <Categorys item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
