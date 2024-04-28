import React from 'react';
import { render } from '@testing-library/react';
import { PokemonList } from '../components/PokemonList';

jest.mock('../redux/createApi', () => ({
  useGetPokemonByNameQuery: jest.fn(),
}));

describe('PokemonList component', () => {
  it('renders loading indicator when data is loading', () => {
    const mockUseGetPokemonByNameQuery = jest.fn(() => ({ isLoading: true }));
    jest.mock('../redux/createApi', () => ({
      useGetPokemonByNameQuery: mockUseGetPokemonByNameQuery,
    }));

    const { getByText } = render(<PokemonList name="pikachu" />);
    expect(getByText('Loading..')).toBeInTheDocument();
  });

  it('renders Pokemon card when data is loaded', () => {
    const mockData = {
      id: 25,
      species: { name: 'pikachu' },
      sprites: { other: { dream_world: { front_default: 'image-url' } } },
    };
    const mockUseGetPokemonByNameQuery = jest.fn(() => ({ isLoading: false, data: mockData }));
    jest.mock('../redux/createApi', () => ({
      useGetPokemonByNameQuery: mockUseGetPokemonByNameQuery,
    }));

    const { getByText, getByAltText } = render(<PokemonList name="pikachu" />);
    expect(getByText('#° 25')).toBeInTheDocument();
    expect(getByText('pikachu')).toBeInTheDocument();
    expect(getByAltText('Pokemon pikachu')).toBeInTheDocument();
  });
});
