/** @jsx jsx */
import { css, jsx } from '@emotion/css'
import { useTheme } from 'emotion-theming'
import { useSelector, useDispatch } from 'react-redux'
import { H3, Hyperlink, Button, Paragraph, Small } from '../../components'
import { LOGOUT_ACTION } from '../../actions'

const LayoutPage = ({ children }) => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const theme = useTheme()
  const handleLogOut = () => {
    dispatch(LOGOUT_ACTION())
  }
  return (
    <div
    className={css`
        max-width: 100%;
      `}
    >
      <div
        className={css`
          background-color: ${theme.colors.backgroundColorPrimary};
        `}
      >
        <div
          className={css`
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            padding: 16px 0;
            justify-content: space-between;
          `}
        >
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <img
              alt="remote-jobb-logo"
              className={css`
                max-width: 100px;
              `}
              src="/logo.png"
            />
            <H3
              className={css`
                height: 15px;
                padding-right: 15px;
                width: 103px;
                text-align: center;
                line-height: 25px;
                text-transform: uppercase;
                color: ${theme.colors.linkPrimary};
              `}
            >
              <Hyperlink
                href="/"
                className={css`
                  border: none;
                `}
              >
                REMOTE JOBB
              </Hyperlink>
            </H3>
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            {(!auth || !auth.logged) && (
              <ul
              className={css`
                  display: flex;
                  li {
                    padding: 0 16px;
                    display: flex;
                    align-items: center;
                  }
                `}
              >
                <li>
                  <Hyperlink
                    className={css`
                      border: none;
                    `}
                    href="/login"
                  >
                    ورود
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink
                    className={css`
                      border: none;
                    `}
                    href="/register"
                  >
                    <Button href="/register">ثبت نام</Button>
                  </Hyperlink>
                </li>
              </ul>
            )}
            {auth && auth.logged && (
              <div>
                خوش آمدید , {auth.user.email}
                <Button onClick={handleLogOut}>خروج</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div
          className={css`
            width: 100%;
            min-height: 400px;
            background-color: ${theme.colors.backgroundColorDefault};
          `}
        >
          {children}
        </div>
      </div>
      <div
        className={css`
          background-color: ${theme.colors.backgroundColorSecondary};
          width: 100%;
        `}
      >
        <div
          className={css`
            max-width: 1000px;
            margin: 0 auto;
            min-height: 300px;
            padding: 32px 0;
          `}
        >
          <div>
            <H3
              className={css`
                color: white;
                padding-bottom: 16px;
              `}
            >
              ما ریموت کار میکنیم
            </H3>
            <Paragraph
              className={css`
                color: white;
              `}
            >
              ریموت کار کردن استایلی از زندگی است که همراه با انعطاف‌پذیری زیاد،
              فرصت بهره‌وری بیشتر از زمان را می‌دهد. اگر همیشه فکر می‌کردید چرا
              هر روز باید به شرکت بروید، این سایت برای شماست
            </Paragraph>
          </div>
        </div>
      </div>
      <div
        className={css`
          background-color: ${theme.colors.backgroundColorDefault};
          width: 100%;
          padding: 16px 0;
        `}
      >
        <div
          className={css`
            max-width: 1000px;
            margin: 0 auto;
          `}
        >
          <div>
            <ul
              className={css`
                display: flex;
                li {
                  padding: 0 16px;
                }
              `}
            >
              <li>
                <Hyperlink
                  className={css`
                    border: none;
                  `}
                  href="/about"
                >
                  درباره
                </Hyperlink>
              </li>
              <li>
                <Hyperlink
                  className={css`
                    border: none;
                  `}
                  href="/contact"
                >
                  تماس
                </Hyperlink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={css`
          background-color: ${theme.colors.backgroundColorPrimary};
          width: 100%;
          padding: 16px 0;
        `}
      >
        <div
          className={css`
            max-width: 1000px;
            margin: 0 auto;
          `}
        >
          <Small>تمامی حقوق متعلق به سایت ریموت‌جابب است</Small>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage