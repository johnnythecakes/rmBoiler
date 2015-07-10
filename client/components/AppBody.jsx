// @jsx React.DOM

var {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;


AppBody = React.createClass({
  mixins: [ReactMeteorData, Navigation, State],
  propTypes: {
    handles: React.PropTypes.array.isRequired,
  },
  getInitialState() {
    return {
      
    };
  },
  getMeteorData() {
    var subsReady = _.all(this.props.handles, function (handle) {
      return handle.ready();
    });

    return {
      subsReady: subsReady,
    };
  },
  
  render() {
    var self = this;

    return <div id="container">
      <SomeComponent />

      <div id="content-container">
        { self.data.subsReady ?
          <RouteHandler /> :
          <AppLoading /> }
      </div>
    </div>
  }
});