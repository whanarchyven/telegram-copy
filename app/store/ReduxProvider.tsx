'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

interface ReduxProvideProps {
  children: ReactNode;
}

export default function ReduxProvide({ children }: ReduxProvideProps) {
  return <Provider store={store}>{children}</Provider>;
}
