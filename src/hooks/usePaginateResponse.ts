import { excludeDataWithSameId } from "@helpers/responses";
import { useState, useEffect } from "react";
import { ResponsePagination, GenericResponse } from "src/models/User";

interface IUsePaginateResponse<DType> {
  callBackRequest: () => Promise<GenericResponse<ResponsePagination<DType[]>>>;
}

export const usePaginateResponse = <DType>({
  callBackRequest,
}: IUsePaginateResponse<DType>) => {
  const [data, setData] = useState<DType[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState<number>(0);
  const [totalResponses, setTotalResponses] = useState(0);

  useEffect(() => {
    setLoading(true);
    callBackRequest().then((response) => {
      if (response.error) {
        setError(response.error.message);
      } else {
        if (data) {
          setData(excludeDataWithSameId(response.data.data, data));
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
    page,
    totalResponses,
    setData,
  };
};
