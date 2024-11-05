import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../Store/ItemsSlice";
import { fetchActions } from "../Store/FetchSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchActions.fetchStarted());
    fetch("http://localhost:8080/api/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(fetchStatus);
        dispatch(fetchActions.markFetchDone());
        dispatch(itemsAction.addInitialItems(data));
        dispatch(fetchActions.fetchEnded());
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
