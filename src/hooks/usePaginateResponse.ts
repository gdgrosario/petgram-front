import { excludeDataWithSameId } from "@helpers/responses";
import { useState, useEffect } from "react";
import { ResponsePagination, GenericResponse } from "src/models/User";

interface IUsePaginateResponse<DType> {
  callBackRequest: () => Promise<GenericResponse<ResponsePagination<DType[]>>>;
  totalP: number;
}

export const usePaginateResponse = <DType>({
  callBackRequest,
  totalP,
}: IUsePaginateResponse<DType>) => {
  const [data, setData] = useState<DType[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(totalP);
  const [page, setPage] = useState<number>(0);
  const [totalResponses, setTotalResponses] = useState(0);

  useEffect(() => {
    setLoading(true);
    callBackRequest().then((response) => {
      if (response.error) {
        setError(response.error.message);
      } else {
        if (data) {
          setTotalPages(totalPages * 2);
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
    totalResponses,
    totalPages,
    page,
    setData,
  };
};
