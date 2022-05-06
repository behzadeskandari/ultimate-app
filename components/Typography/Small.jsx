

import { css, jsx } from '@emotion/css'
import { useTheme } from '@emotion/react'


const Small = ({ children, align = 'right' }) => {
    const theme = useTheme()
    return (
      <span
      className={css`
          text-align: ${align};
          font-weight: ${theme.typography.small.fontWeight};
          line-height: ${theme.typography.small.lineHeight};
          font-size: ${theme.typography.small.fontSize}em;
        `}
      >
        {children}
      </span>
    )
  }
  
  export default Small