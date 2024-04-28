// PokemonDetail.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import { PokemonDetail } from '../components/PokemonDetail';

jest.mock('../redux/createApi', () => ({
  useGetPokemonByIdQuery: jest.fn(),
}));
jest.mock('../helper/helper', () => ({
  firstWordCapital: jest.fn((str) => str),
}));

describe('PokemonDetail component', () => {
  it('renders loading indicator when data is loading', () => {
    const mockUseGetPokemonByIdQuery = jest.fn(() => ({ isLoading: true }));
    jest.mock('../redux/createApi', () => ({
      useGetPokemonByIdQuery: mockUseGetPokemonByIdQuery,
    }));

    const { getByText } = render(<PokemonDetail id={25} />);
    expect(getByText('Loading..')).toBeInTheDocument();
  });

  it('renders Pokemon detail when data is loaded', () => {
    const mockData = {
      id: 25,
      name: 'pikachu',
      sprites: { other: { dream_world: { front_default: 'image-url' } } },
      types: [{ type: { name: 'electric' } }],
      height: 40,
      weight: 60,
      stats: [
        { base_stat: 50 },
        { base_stat: 60 },
        { base_stat: 70 },
        { base_stat: 80 },
        { base_stat: 90 },
        { base_stat: 100 },
      ],
    };
    const mockUseGetPokemonByIdQuery = jest.fn(() => ({ isLoading: false, data: mockData }));
    jest.mock('../redux/createApi', () => ({
      useGetPokemonByIdQuery: mockUseGetPokemonByIdQuery,
    }));

    const { getByText, getByAltText } = render(<PokemonDetail id={25} />);
    expect(getByText('Pokémon Detail')).toBeInTheDocument();
    expect(getByAltText('Pokemon pikachu')).toBeInTheDocument();
    expect(getByText('#25')).toBeInTheDocument();
    expect(getByText('Pikachu')).toBeInTheDocument();
    expect(getByText('Electric')).toBeInTheDocument();
    expect(getByText('Altura')).toBeInTheDocument();
    expect(getByText('40')).toBeInTheDocument();
    expect(getByText('Peso')).toBeInTheDocument();
    expect(getByText('60KG')).toBeInTheDocument();
    expect(getByText('Hp')).toBeInTheDocument();
    expect(getByText('50')).toBeInTheDocument();
    // Add similar assertions for other stats
  });
});
