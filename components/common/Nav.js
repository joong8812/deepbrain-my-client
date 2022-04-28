import Link from "next/link"
import styles from "./styles/Nav.module.css"

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}><Link href="/">메인</Link></li>
        <li className={styles.li}><Link href="/campsite/list">캠핑장 리스트</Link></li>
        <li className={styles.li}><Link href="/campsite/add">캠핑장 등록</Link></li>
        <li className={styles.li}><Link href="/user/login">로그인</Link></li>
        <li className={styles.li}><Link href="/user/join">회원가입</Link></li>
      </ul>
    </nav>
  )
}