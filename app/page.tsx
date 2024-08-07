'use client';

import { Input } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
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

  function handleSearch2(event: React.KeyboardEvent<HTMLInputElement>) {
    let query: string;
    if (event.key === 'Enter') {
      query = event.currentTarget.value;
      if (query.trim() === '') {
      } else {
        window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(query)}`)
      }
    }
  }

  function handleSearch3(event: React.KeyboardEvent<HTMLInputElement>) {
    let query: string;
    if (event.key === 'Enter') {
      query = event.currentTarget.value;
      if (query.trim() === '') {
      } else {
        window.open(`https://yandex.com/search/?text=${encodeURIComponent(query)}`)
      }
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>Bing</Tab>
            <Tab>Baidu</Tab>
            <Tab>Yandex</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Input placeholder='Search' size='lg' onKeyDown={(e) => handleSearch(e)} />
            </TabPanel>
            <TabPanel>
              <Input placeholder='Search' size='lg' onKeyDown={(e) => handleSearch2(e)} />
            </TabPanel>
            <TabPanel>
              <Input placeholder='Search' size='lg' onKeyDown={(e) => handleSearch3(e)} />
            </TabPanel>
          </TabPanels>
        </Tabs>

      </div>

      <div className={styles.grid}>
      </div>
    </main>
  );
}
