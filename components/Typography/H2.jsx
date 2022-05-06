import { css, jsx } from '@emotion/css'
import { useTheme } from '@emotion/react'


const H2 = ({ children, align = 'right', ...props }) => {
    const theme = useTheme()
    return (
      <h1
      className={css`
          text-align: ${align};
          font-weight: ${theme.typography.h2.fontWeight};
          line-height: ${theme.typography.h2.lineHeight};
          margin-top: 0;
          font-size: ${theme.typography.h2.fontSize}em;
        `}
        {...props}
      >
        {children}
      </h1>
    )
  }
  
  export default H2