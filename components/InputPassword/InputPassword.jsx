import {css} from '@emotion/css';
import Input from '../Input/Input';


const InputPassowrd = (props) => (
    <div
      css={css`
        width: 100%;
        direction: ltr;
        input::placeholder {
          direction: rtl;
        }
      `}
    >
      <Input type="password" {...props} />
    </div>
  )
  
  export default InputPassowrd