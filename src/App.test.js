import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import App from './App';
import Navbar from './components/shared/Navbar/Navbar';
import ReactDOM from 'react-dom';


test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
            <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  );
  
  expect(getByText(/learn/i)).toBeInTheDocument();
});

