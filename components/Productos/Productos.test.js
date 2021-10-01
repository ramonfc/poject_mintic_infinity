import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Productos from './Productos';

describe('<Productos />', () => {
  test('it should mount', () => {
    render(<Productos />);
    
    const productos = screen.getByTestId('Productos');

    expect(productos).toBeInTheDocument();
  });
});