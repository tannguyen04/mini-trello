import CardBox from './card.jsx';
var ListCardBox = React.createClass({
  loadListCardsFromServer: function() {
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
    this.loadListCardsFromServer();
    setInterval(this.loadListCardsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="container-fluid">
        <h1>List</h1>
        <ListCards data={this.state.data}/>
      </div>
    );
  }
});
var ListCards = React.createClass({
  render: function() {
    var cardListBoards = this.props.data.map(function (cardList) {
      return (
        <ListCard data={cardList}/>
      );
    });
    return (
      <div className="row">
        {cardListBoards}
      </div>
    );
  }
});
var ListCard = React.createClass({
  render: function() {
    var cardList = this.props.data;
    return (
      <div className="col-md-4">
        <div className="listcard">
          <h2>{cardList.name}</h2>
          <CardBox url="http://localhost/drupal/mini-trello/board/16/cards.json" pollInterval={10000}/>
        </div>
      </div>
    );
  }
});
React.render(
  <ListCardBox url="http://localhost/drupal/mini-trello/listcards/16.json" pollInterval={10000}/>,
  document.getElementById('listcard')
);

