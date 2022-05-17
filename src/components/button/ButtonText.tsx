import React, { PureComponent } from 'react';

import s from './ButtonText.module.scss';

type ButtonTextType = {
  id: any;
  name: string;
  value: any;
  onClick: (name: string, id: string) => void;
  selected: any;
};
class ButtonText extends PureComponent<ButtonTextType> {
  render() {
    const { id, name, value, onClick, selected } = this.props;
    return (
      <button
        type="button"
        onClick={() => onClick(name, id)}
        className={`${s.attributeItem} ${selected ? s.active : ''}`}
      >
        {value}
      </button>
    );
  }
}
export default ButtonText;