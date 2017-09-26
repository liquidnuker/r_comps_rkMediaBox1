function RkMediaBox102_mediaLeft(props) {
  return (
    <div className="rkmediabox102_media-left">
    <div className="rkmediabox102_img-holder">
    <img src="img.jpg" alt="img alt" title="img title" />
    </div>
    </div>
  );
}

function RkMediaBox102_content(props) {
  return (
    <div>
    <h3 className="rkmediabox102_heading">Media title 1</h3>
    <p>{props.pr_text}</p>
    </div>
  );
}

function RkMediaBox102_contentButtons(props) {
  return (
    <div>
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
    </div>
  );
}

class RkMediaBox102_mediaRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,..."
    };

    // 
    // this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      // z: ""
    }));
  }

  render() {
    return (
      <section className="rkmediabox102_media-right">
      <RkMediaBox102_content pr_text={this.state.text} />
      <RkMediaBox102_contentButtons />
      </section>
    );
  }
}

function RkMediaBox102_extras(props) {
  return (
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
  );
}

export default class RkMediaBox102 extends React.Component {
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
        <RkMediaBox102_mediaLeft />
        <RkMediaBox102_mediaRight />
        <RkMediaBox102_extras />
      </div>
    );
  }
}