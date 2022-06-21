import type { NextPage } from 'next'
import * as React from "react";
import { Form } from "./tradeform";
import { Field } from "./tradefield";
import Head from 'next/head'
import styles from '../../styles/Home.module.css'



export const trade: React.FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>SwapBroker.io</title>
        <meta name="description" content="Generate one time use swap contracts for absolute security." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.card}>
            <Form
            action="http://localhost:4351/api/contactus"
            render={() => (
                <React.Fragment>
                <div className={styles.grid}>
                    Enter Trade Details...
                </div>
                <Field label="Trader 1 " id="t1addy" />
                <Field label="NFT 1 " id="t1addy" />
                <Field label="Trader 2 " id="t2addy" />
                <Field label="NFT 2 " id="t2addy" />
                <Field
                    id="reason"
                    label="Reason"
                    editor="dropdown"
                    options={["", "Marketing", "Support", "Feedback", "Jobs"]}
                />
                <Field id="notes" label="Notes" editor="multilinetextbox" />
                </React.Fragment>
            )}
            />
        </div>
    </div>
  );
};

export default trade