import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StoreData } from './services/actions/StoreData';

function MyComponent(props) {
  useEffect(() => {
    props.StoreData();
  }, []);

  return (
    <div>
      {props.data.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.store.data,
  };
};

export default connect(mapStateToProps, { StoreData })(MyComponent);