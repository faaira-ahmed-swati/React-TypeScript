import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import Button from './button';
import { AdjustColorActions } from '../../color-reducer';

type ColorChangeSwatchProps = {
  hexColor: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  dispatch?: React.Dispatch<AdjustColorActions>;
};

const ColorChangeSwatch = ({
  hexColor,
  className,
  onClick,
  dispatch,
}: ColorChangeSwatchProps) => {
  return (
    <Button
      className={clsx(
        'border-2 border-slate-900 transition-shadow duration-200 ease-in hover:shadow-xl',
        className,
      )}
      style={{ backgroundColor: hexColor }}
      onClick={(e) => {
        if (dispatch) {
          dispatch({
            type: 'color-change-swatch',
            payload: { hexColor },
          });
        }
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
