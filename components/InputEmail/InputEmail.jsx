import {css} from '@emotion/css';
import Input from '../Input/Input';


const InputEmail = (props) => (
    <div
    className={css`
        width: 100%;
        direction: ltr;
        &::placeholder {
          direction: rtl;
          color: red;
        }
        input::placeholder {
          direction: rtl;
        }
      `}
    >
      <Input type="email" {...props} />
    </div>
  )
  
  export default InputEmail