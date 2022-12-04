import MusicRoute from "./app/routes/Routes";
import "antd/dist/antd.css";
import "antd/dist/antd.less";
import useLoading from "./app/hook/useLoading";
import LoadingSpin from "./app/components/loadingSpin";

function App() {
  const { isLoading } = useLoading(true, 100);
  return (
    <div className="App">
      {isLoading && <LoadingSpin />}
      {!isLoading && <MusicRoute />}
    </div>
  );
}

export default App;
