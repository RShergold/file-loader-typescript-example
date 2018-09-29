import * as React from 'react';
import * as Emoji from './slightly-smiling-face.png';

type Props = {
  label: string;
};

class Card extends React.Component<Props> {
  render() {
    return (
      <div>
        <img src={Emoji} alt="face"/>
        <p>{this.props.label}</p>
      </div>
    );
  }
}

export default Card;
