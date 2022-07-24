import { useState, useEffect } from "react";
import { ResponsePagination, GenericResponse } from "src/models/User";

interface IUsePaginateResponse<DType> {
  callBackRequest: () => Promise<GenericResponse<ResponsePagination<DType[]>>>;
  totalP: number;
}

export const usePaginateResponse = <
  DType extends {
    id: string;
  }
>({
  callBackRequest,
  totalP,
}: IUsePaginateResponse<DType>) => {
  const [data, setData] = useState<DType[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(totalP);
  const [page, setPage] = useState<number>(0);
  const [totalResponses, setTotalResponses] = useState(0);

  const excludeDataWithSameId = (newData: DType[]) => {
    var array = [];
    for (var i = 0; i < data.length; i++) {
      var same = false;
      for (var j = 0; j < newData.length && !same; j++) {
        if (data[i]["id"] === newData[j]["id"]) same = true;
      }
      if (!same) array.push(data[i]);
    }
    console.table(data);
    console.table(array);

    return array;
  };

  useEffect(() => {
    setLoading(true);
    callBackRequest().then((response) => {
      if (response.error) {
        setError(response.error.message);
      } else {
        if (data) {
          setTotalPages(totalPages * 2);
          setData([...data, ...response.data.data]);
          excludeDataWithSameId([...response.data.data]);
        } else {
          setData(response.data.data);
        }
        setTotalResponses(response.data.count);
      }
      setLoading(false);
    });
  }, [page]);

  return {
    data,
    error,
    loading,
    setPage,
    totalResponses,
    totalPages,
    page,
    setData,
  };
};
