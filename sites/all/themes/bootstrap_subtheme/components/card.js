var CardBox = React.createClass({
  loadCardsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCardsFromServer();
    setInterval(this.loadCardsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="cardbox">
        <CardList data={this.state.data}/>
      </div>
    );
  }
});
var CardList = React.createClass({
  render: function() {
    var cardBoards = this.props.data.map(function (card) {
      return (
        <Card data= {card}/>
      );
    });
    return (
      <div className="cardlist">
        {cardBoards}
      </div>
    );
  }
});
var Card = React.createClass({
  render: function() {
    return (
      <div className="card-item">
        <div>{this.props.data.title}</div>
      </div>
    );
  }
});
/*React.render(
  <CardBox url="http://localhost/drupal/mini-trello/board/16/cards.json" pollInterval={10000}/>,
  document.getElementById('cardbox')
);*/
