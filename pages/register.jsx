import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {css, jsx} from '@emotion/css';
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth';
import { Button, H1, InputEmail,InputPassword } from '../components';
import FormControl from '../containers/FormControl/FormControl'
import Hyperlink from '../components/Hyperlink/Hyperlink';
import {useRouter} from 'next/link';

export default function Register() {
  const [formValue,setForm] = useState({});
  const router = useRouter();
  const handleSubmit = (event)=> {
    if(event) event.preventDefault();  

    console.log('handleSubmit',formValue);
    router.push('/');
  }

  const handleOnChange = (name,value) => {
    setForm({
      ...formValue,
      [name]: value
    })
  }

  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
 
            <LayoutAuth>
                <>
                <H1>Headder</H1>
                     <form onSubmit={handleSubmit}>
                         <FormControl>
                            <InputEmail onChange={() => handleOnChange('email', value)} placeholder='email' />
                         </FormControl>
                         <FormControl>                        
                            <InputPassword onChange={() => handleOnChange('password', value)} placeholder='password' />
                         </FormControl>
                         <FormControl> 
                            <Button type="submit">Submit</Button>
                         </FormControl> 
                         <div>
                           <Hyperlink href="/login">
                             <a>وارد شوید</a>
                           </Hyperlink>
                         </div>
                     </form>
                 </>
            </LayoutAuth>
      </main>


     
    </div>
  )
}
