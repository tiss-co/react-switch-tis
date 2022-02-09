import React from 'react';
import { Switch as CustomSwitch, FormControlLabel, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './styles.module.scss';

export const Switch = ({
  className,
  label,
  labelPosition = 'start',
  onChange,
  checked = false,
  color = '#0085fe',
  defaultChecked = false,
  small = true,
  darkMode = false,
  disabled = false
}) => {
  const size = small ? 'small' : 'medium';

  const CustomMaterialSwitch = withStyles({
    switchBase: {
      color: color,
      '&$checked': {
        color: color,
      },
      '&$checked + $track': {
        backgroundColor: color,
      },
    },
    checked: {},
    track: {},
  })(CustomSwitch);

  if (!label)
    return (
      <CustomMaterialSwitch
        className={classNames(css.Switch_SwitchTis, {
          [css.Dark_SwitchTis]: darkMode
        }, className)}
        defaultChecked={defaultChecked}
        value={checked}
        size={size}
        onChange={onChange}
      />
    );

  return (
    <FormControlLabel
      className={classNames(css.SwitchForm_SwitchTis, {
        [css.Dark_SwitchTis]: darkMode
      }, className)}
      control={
        <CustomMaterialSwitch
          className={classNames(css.Switch_SwitchTis, {
            [css.Dark_SwitchTis]: darkMode
          })}
          defaultChecked={defaultChecked}
          value={checked}
          size={size}
          onChange={onChange}
          disabled={disabled}
        />
      }
      label={label}
      labelPlacement={labelPosition}
    />
  );
};


export const labelPosition = {
  top: 'top',
  bottom: 'bottom',
  start: 'start',
  end: 'end'
};

Switch.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  color: PropTypes.string,
  defaultChecked: PropTypes.bool,
  small: PropTypes.bool,
  darkMode: PropTypes.bool,
  disabled: PropTypes.bool
};