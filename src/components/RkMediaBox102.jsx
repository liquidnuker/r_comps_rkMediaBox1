export default class RkrkMediaBox102 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // property1: ""
    };

    // 
    this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      // property1: store.state
    }));
  }

  render() {
    return (
      <div className="row rkmediabox102">
        <div className="rkmediabox102_media-left">
          <div className="rkmediabox102_img-holder">
            <img src="img.jpg" alt="img alt" title="img title" />
          </div>
        </div>
        <section className="rkmediabox102_media-right">
          <h3 className="rkmediabox102_heading">Media title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.</p>
          <span className="btn btn1-01" tabindex="0">
            Read more
            <svg className="rkmediabox102_btn_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            </svg>
          </span>
          <span className="btn btn1-01" tabindex="0">
            Read more
            <svg className="rkmediabox102_btn_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            </svg>
          </span>
        </section>
        <footer className="row rkmediabox102_extras col-sm-12">
          <p>extras</p>
          <span role="button" className="btn btn1-01" tabindex="0">
            Read more
            <svg className="rkmediabox102_btn_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            </svg>
          </span>
          <span role="button" className="btn btn1-01" tabindex="0">
            Read more
            <svg className="rkmediabox102_btn_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            </svg>
          </span>
        </footer>
      </div>
    );
  }
}