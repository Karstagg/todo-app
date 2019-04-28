import React, {Component} from "react"

//renders sections for documentation and faq
class TodoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        width: '40vw',
        height: 100,
        backgroundColor: 'black',
        color: "white",
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 10
      }}>
        <h3>{this.props.title}</h3>
        <p>{this.props.summary}</p>
      </div>
    )
  }
}



export default TodoCard

