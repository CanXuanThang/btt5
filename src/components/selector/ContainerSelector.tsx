import Selector from "./Selector";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";
import { fetchData } from "../../redux/actions";

interface Props {
  page: any;
}

function ContainerSelector(props: Props) {
  const { page } = props;
  const data = useSelector((state: any) => state.data.data);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch]);

  return (
    <div className="d-flex">
      <Selector data={data && data} />
    </div>
  );
}

export default ContainerSelector;
