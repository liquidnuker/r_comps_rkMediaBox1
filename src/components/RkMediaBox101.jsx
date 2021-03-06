function RkMediaBox101_mediaLeft(props) {
  return (
    <div className="rkmediabox101_media-left">
    <div className="rkmediabox101_img-holder">
    <img src="img.jpg" alt="img alt" title="img title" />
    </div>
    </div>
  );
}

function RkMediaBox101_content(props) {
  return (
    <div>
    <h3 className="rkmediabox101_heading">Media title 1</h3>
    <p>{props.pr_text}</p>
    </div>
  );
}

function RkMediaBox101_extras(props) {
  return (
    <footer className="row rkmediabox101_extras">
    <span role="button" className="btn btn1-01" tabindex="0">
    Read more
    <svg className="rkmediabox101_btn_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
    </svg>
    </span>
    <span role="button" className="btn btn1-01" tabindex="0">
    Read more
    <svg className="rkmediabox101_btn_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
    </svg>
    </span>
    </footer>
  );
}

class RkMediaBox101_mediaRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,..."
    };

    // binders 
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
      <section className="rkmediabox101_media-right">
        <RkMediaBox101_content pr_text={this.state.text} />
        <RkMediaBox101_extras />
      </section>
    );
  }
}

export default class RkrkMediaBox101 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // property1: ""
    };

    // 
    // this.method1 = this.method1.bind(this);
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
      <div className="row rkmediabox101">
        <RkMediaBox101_mediaLeft />
        <RkMediaBox101_mediaRight />
      </div>
    );
  }
}