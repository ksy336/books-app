import React from 'react';
import { IProps } from './types';
import Button from '../../components/Button/Button';

const NoFoundView = ({ handleClick }: IProps) => {
  return (
    <div className="error-content">
      <p>
        <Button onClick={handleClick}>Come back</Button>
      </p>
    </div>
  );
};
export default NoFoundView;
