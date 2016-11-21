var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav</h2>
      <IndexLink to="/" activeClassName="action" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="action" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="action" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports = Nav;
