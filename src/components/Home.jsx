import RkMediaBox101 from "./RkMediaBox101.jsx";
import RkMediaBox102 from "./RkMediaBox102.jsx";

export default function Home(props) {
  return (
    <div>

  {/*rkMediaBox101*/}
    <h2 className="item-id">rkMediaBox101</h2>
    <div className="row">
      <div className="col-sm-3">&nbsp;</div>
      <div className="col-sm-9">
        <RkMediaBox101 />
      </div>
    </div>

  {/*rkMediaBox102*/}
    <h2 className="item-id">rkMediaBox102</h2>
    <div className="row">
      <div className="col-sm-3">&nbsp;</div>
      <div className="col-sm-9">
        <RkMediaBox102 />
      </div>
    </div>



    </div>
  );
}