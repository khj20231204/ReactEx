import React from 'react';
import color from './Color';

const ColorBox = () => {
   return (
      <color.Consumer>
         {v => v.color}
      </color.Consumer>
   );
};

export default ColorBox;