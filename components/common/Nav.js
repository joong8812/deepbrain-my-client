import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./styles/Nav.module.css"

export default function Nav(){
  const [userUrls, setUserUrls] = useState(['/user/login', '/user/signup'])
  const [userSubTitle, setUserSubTitle] = useState(['로그인', '회원가입'])

  useEffect(() => {
    const loginUser = localStorage.getItem('loginUser')
    if (loginUser === null) {
      setUserUrls(['/user/login', '/user/signup'])
      setUserSubTitle(['로그인', '회원가입'])
    } else {
      setUserUrls(['/campsite/list', '/campsite/add', '/user/logout'])
      setUserSubTitle(['캠핑장 리스트', '캠핑장 등록', '로그아웃'])
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li} key={10}><Link href="/">메인</Link></li>
        {
          userUrls.map((url, idx) => {
            return <li className={styles.li} key={idx}><Link href={url}>{userSubTitle[idx]}</Link></li>
          })
        }
      </ul>
    </nav>
  )
}