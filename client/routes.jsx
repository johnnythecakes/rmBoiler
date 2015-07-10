var {
  Route,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

var routes = (
  <Route name="root" handler={AppBody} path="/">
    <DefaultRoute handler={AppLoading} />
    <NotFoundRoute handler={AppNotFound} />
  </Route>
)

var router = ReactRouter.create({
  routes: routes,
  location: ReactRouter.HistoryLocation
});

var subsReady;

// This data is used on every page; also we want to make sure we route to the
// first list instead of no list at all
var handles = [
  Meteor.subscribe("publicCollections"),
  Meteor.subscribe("privateCollections")
];

Meteor.startup(function () {
  router.run(function (Handler, state) {
    // If we are at the root and our subscriptions are done
    if (state.routes.length > 1 && state.routes[1].isDefault && subsReady) {
      showFirstList();
    }

    React.render(<Handler handles={ handles } />, document.body);
  });
});