import { useTheme } from '@emotion/react'
import {css} from '@emotion/css'
const FormControl = ({ children }) => {
    const theme = useTheme()
    return (
      <div
        className={css`
          display: flex;
          padding: ${theme.spaces[3]} 0;
        `}
      >
        {children}
      </div>
    )
  }
  
  export default FormControl