import React, { Dispatch, useCallback, useEffect, useState } from "react";
import { DataType } from "./interface";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/actions";
import { useSelector } from "react-redux";

interface Props {
  data: DataType[];
}

function Tables(props: Props) {
  const { data: propsData } = props;
  const [data, setData] = useState(propsData);
  const dataSearch = useSelector((state: any) => state.data.searchItem);

  const dataItem =
    data &&
    dataSearch &&
    data.filter(
      (item) =>
        item.status === dataSearch.status ||
        item.client === dataSearch.client ||
        item.invoice === dataSearch.invoice
    );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    setData(propsData);
  }, [propsData]);

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const id = e.currentTarget.value;
      dispatch(deleteData(id));
      setData((prevData) => prevData.filter((item) => item.id !== id));
    },
    [dispatch]
  );

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Status</th>
          <th scope="col">Date</th>
          <th scope="col">Client</th>
          <th scope="col">Currency</th>
          <th scope="col">Total</th>
          <th scope="col">Invoice #</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {data && dataItem
          ? dataItem.map((item: DataType) => (
              <tr key={item.id}>
                <td>{item.status}</td>
                <td>{item.date}</td>
                <td>{item.client}</td>
                <td>{item.currency}</td>
                <td>{item.total}</td>
                <td>{item.invoice}</td>
                <td>
                  <button value={item.id} onClick={handleDelete}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-archive"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          : data?.map((item: DataType) => (
              <tr key={item.id}>
                <td>{item.status}</td>
                <td>{item.date}</td>
                <td>{item.client}</td>
                <td>{item.currency}</td>
                <td>{item.total}</td>
                <td>{item.invoice}</td>
                <td>
                  <button value={item.id} onClick={handleDelete}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-archive"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

export default Tables;
