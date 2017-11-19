import React, { Component } from "react";
// const withClass = (Wrappedcomponent, className) => {
//   return props => (
//     <div className={className}>
//       <Wrappedcomponent {...props} />
//     </div>
//   );
// };
const withClass = (Wrappedcomponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <Wrappedcomponent {...this.props} />
        </div>
      );
    }
  };
};
export default withClass;
