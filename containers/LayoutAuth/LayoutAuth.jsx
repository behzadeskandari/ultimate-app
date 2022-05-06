import {css} from '@emotion/css';

const LayoutAuth = ({children}) => <div className={css`
display: flex;
height: 100vh;
max-width: 320px;
margin: 0 auto;
align-items: center;
justify-content: center;
flex-direction: column;
`}> 
    <div>
        <img src="logo.png" alt="logo" className={css`
        width: 300px
        `}  height={200} />
        <h2>به ریموت جاب خوش آمدید</h2>
    </div>
    <div>
        {children}
    </div>
</div>


export default LayoutAuth;