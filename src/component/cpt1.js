import React from "react";

class Cpt1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  addCount() {
    this.setState((preState) => ({
      count: preState.count + 1,
    }));
  }
  componentDidUpdate() {
    console.log('cpt1 rending')
  }
  render() {
    const { count } =this.props
    return (
      <>
        <div className="count">
          <button
            onClick={() => {
              console.log(this);
              this.addCount();
            }}
          >
            +
          </button>
        </div>
        <p>{count}</p>
      </>
    );
  }
}

export default Cpt1;
