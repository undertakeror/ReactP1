var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        list of comments
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
