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

  const handlePageChange = (pageNum: number) => {
    setPage(pageNum);
  };

  const prevBtn = page === 1 ? "page-item disabled" : "page-item";
  const nextBtn = page === 3 ? "page-item disabled" : "page-item";

  return (
    <div className="container mt-3">
      <Header />
      <ContainerSelector page={page} />
      <Tables data={data} />
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li id="previous" className={prevBtn}>
            <a className="page-link" onClick={handlePrevious}>
              Previous
            </a>
          </li>
          {[1, 2, 3].map((pageNum) => (
            <li key={pageNum} className="page-item">
              <a
                className="page-link"
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </a>
            </li>
          ))}

          <li id="next" className={nextBtn}>
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
