var StyledFileFieldPreview = React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.attachment} className="attachment" />
        <a href="#" onClick={this.props.onRemoveClick} className="remove-attachment">
          <i className="icon-trash"></i>
        </a>
      </div>
    )
  }
});
