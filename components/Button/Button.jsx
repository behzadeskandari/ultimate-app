import {css} from '@emotion/css';

import {useTheme} from '@emotion/react';



const Button = ({
    type='button',
    children,
    widthAll,
    buttonType = 'primary',
}) => {
    const theme = useTheme();
    console.log('====================================')
    console.log(theme,'theme')
    console.log('====================================')
    return (
      <div
        className={css`
          width: 100%;
        `}
      >
        <button type={type} className={css`
        width: ${widthAll ? '100%' : 'auto'};
        background-color: ${theme.colors[buttonType]};
        color: white;
        font-size: ${theme.typography.paragraph};
        text-decoration: none;
        padding: 16px 24px;
        border: ${theme.border[1]};
        border-radius: ${theme.borderRadius[1]};
        display: inline-block;
        position: relative;
        cursor: pointer;
        transition-duration: 0.4s;
        &:hover {
          box-shadow: ${theme.boxShadow.light};
          background-color: ${theme.colors.secondary};
        }
        &:disabled {
          background-color: ${theme.colors.backgroundColorSecondary};
          cursor: no-drop;
        }
        `}
        >
          {children}
        </button>
      </div>
    )
  }
  
  export default Button