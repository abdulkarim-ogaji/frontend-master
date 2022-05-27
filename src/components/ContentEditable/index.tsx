import React, { useState } from 'react';
import styles from './textarea.module.css'

const TextArea = () => {
  const [numbers, setNumbers] = useState<string>("")
  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    // @ts-ignore
    setNumbers(e.target.innerText) 
    console.log(numbers);
  }
  return <div className={styles.container}>
    <div  contentEditable className={styles.textarea} onInput={handleChange}>{numbers}</div>
  </div>
}

export default TextArea;