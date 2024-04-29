// === Typescript With React jS && Type Data - POO - ===
import styles from '../components/styles/Button.module.css'

interface Props {
  children?: preact.ComponentChildren
  onClick?: (e:MouseEvent) => any
  id?: string
  className?: string
  target?: string
  url: string
}


export default function Button( { children, onClick, id, className, target, url }:Props ) {}


