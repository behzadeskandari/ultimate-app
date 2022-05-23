import {css,jsx} from '@emotion/css';

import { useTheme } from '@emotion/react'

const Input = ({ type = 'text', placeholder, onChange }) => {
  const theme = useTheme()
   console.log('====================================')
   console.log(theme,'themethemethemetheme');
   console.log('====================================')
  const handleOnChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div
      className={css`
        width: 100%;
        input::placeholder {
          direction: rtl;
        }
      `}
    >
      <input
        className={css`
          width: 100%;
          background-color: ${theme.colors.backgroundColorPrimary};
          font-size: ${theme.typography.paragraph};
          text-decoration: none;
          border: ${theme.border[1]} solid;
          border-color: ${theme.borderColor.light};
          padding: ${theme.spaces[4]};
          border-radius: ${theme.borderRadius[1]};
          display: inline-block;
          position: relative;
          cursor: pointer;
        `}
        autoComplete="new-password"
        onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input