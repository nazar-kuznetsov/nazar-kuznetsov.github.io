import React from 'react';
import { Nav } from '../../modules/details/nav';


// const Wrapper = (Component, data, match) => {
//   return (props) => (
//     <>
//     <Nav match={props.match} feedback={props.product?.feedback} />
//     <div className="phone-details__content">
//       {props.product && <Component {...props} />}
//     </div>
//     </>
//   );
// }

const Wrapper = (Component, data, match) => {
  return class extends React.Component {
    render() {
      return (
        <>

            {
              data
                ? <Component {...this.props} product={data} />
                : <div>Идет загрузка</div>
            }


        </>
      )
    }
  }
}
export default Wrapper;
