'use client';

import { Input } from '@chakra-ui/react';
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
    let query: string;
    if (event.key === 'Enter') {
      query = event.currentTarget.value;
      if (query.trim() === '') {
      } else {
        window.open(`https://cn.bing.com/search?q=${encodeURIComponent(query)}`)
      }
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Input placeholder='Search' size='lg' onKeyDown={(e)=> handleSearch(e)}/>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  );
}
