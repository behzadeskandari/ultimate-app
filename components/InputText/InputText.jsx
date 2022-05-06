import {css} from '@emotion/css';
import Input from '../Input/Input';


const InputText = (props) => (
    <div
      css={css`
        width: 100%;
      `}
    >
      <Input type="text" {...props} />
    </div>
  )
  
  export default InputText