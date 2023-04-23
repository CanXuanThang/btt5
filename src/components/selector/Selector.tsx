import { Dispatch, useEffect, useState } from "react";
import "../Global.scss";
import { SearchDataType } from "../interface";
import { Button, Space } from "antd";
import { useDispatch } from "react-redux";
import { searchData } from "../../redux/actions";

interface Props {
  data: any;
}

function Selector(props: Props) {
  const { data } = props;
  const dispatch: Dispatch<any> = useDispatch();
  const [dataItem, setDataItem] = useState<SearchDataType>({
    status: "Status",
    from: "",
    to: "",
    client: "Client",
    invoice: "",
  });

  const handleApply = () => {
    dispatch(
      searchData(
        dataItem.status,
        dataItem.from,
        dataItem.to,
        dataItem.client,
        dataItem.invoice
      )
    );
  };

  const handleClear = () => {
    setDataItem({
      status: "Status",
      from: "",
      to: "",
      client: "Client",
      invoice: "",
    });
  };

  return (
    <div className="d-flex">
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue="Status"
        onChange={(e) => setDataItem({ ...dataItem, status: e.target.value })}
      >
        <option value={dataItem.status}>{dataItem.status}</option>
        {data &&
          data.map((item: any) => (
            <option value={item.status} key={item.id}>
              {item.status}
            </option>
          ))}
      </select>
      <select
        className="form-select mx-4"
        aria-label="Default select example"
        defaultValue="Client"
        onChange={(e) => setDataItem({ ...dataItem, client: e.target.value })}
      >
        <option value={dataItem.client}>{dataItem.client}</option>
        {data &&
          data.map((item: any) => (
            <option value={item.client} key={item.id}>
              {item.client}
            </option>
          ))}
      </select>
      <input
        type="datetime-local"
        aria-label="Default select example"
        className="form-select"
        id="birthdaytime"
        name="birthdaytime"
        style={{ height: 47, margin: 0 }}
        placeholder="From"
        onChange={(e) => setDataItem({ ...dataItem, from: e.target.value })}
      ></input>
      <input
        type="datetime-local"
        aria-label="Default select example"
        className="form-select mx-4"
        id="birthdaytime"
        name="birthdaytime"
        style={{ height: 47, margin: 0 }}
        onChange={(e) => setDataItem({ ...dataItem, to: e.target.value })}
      ></input>
      <input
        type="text"
        style={{ height: 47, margin: 0 }}
        placeholder="Invoice"
        aria-label="Default select example"
        className="form-select"
        onChange={(e) => setDataItem({ ...dataItem, invoice: e.target.value })}
      />
      <div className="d-flex flex-column " style={{ padding: 0 }}>
        <Space
          className="site-button-ghost-wrapper"
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <Button type="primary" className="mx-5" ghost onClick={handleApply}>
            Apply
          </Button>
          <Button type="primary" danger ghost onClick={handleClear}>
            Clear
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default Selector;
