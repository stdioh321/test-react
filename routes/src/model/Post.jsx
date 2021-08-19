// Example usage:
//
// import { MyShape } from ./myShape.js;
//
// class MyComponent extends React.Component {
//   //
// }
//
// MyComponent.propTypes = {
//   input: MyShape
// };

import PropTypes from "prop-types";

let _Post;
_Post = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
});

export const Post = _Post;
