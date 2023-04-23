import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Tables from "./components/Tables";
import ContainerSelector from "./components/selector/ContainerSelector";
import { useSelector } from "react-redux";
import { Dispatch, useEffect, useState } from "react";
import { fetchData } from "./redux/actions";
import "./components/Global.scss";

function App() {
  const data = useSelector((state: any) => state.data.data);
  const [page, setPage] = useState(1);

  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch, page]);

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < 3) {
      setPage(page + 1);
    }
  };

  const handleOne = () => {
    setPage(1);
  };

  const handleTwo = () => {
    setPage(2);
  };

  const handleThree = () => {
    setPage(3);
  };

  if (page === 1) {
    document.getElementById("previous")?.classList.add("disabled");
  } else {
    document.getElementById("previous")?.classList.remove("disabled");
  }
  if (page === 3) {
    document.getElementById("next")?.classList.add("disabled");
  } else {
    document.getElementById("next")?.classList.remove("disabled");
  }

  return (
    <div className="container mt-3">
      <Header />
      <ContainerSelector page={page} />
      <Tables data={data} />
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li id="previous" className="page-item">
            <a className="page-link" onClick={handlePrevious}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={handleOne}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={handleTwo}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={handleThree}>
              3
            </a>
          </li>
          <li id="next" className="page-item">
            <a className="page-link" onClick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
