
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import {ChallengeProvider} from '../contexts/ChallengeContext';
import {CountdownProvider} from '../contexts/CountdownContext';
import styles from '../styles/page/Home.module.css';
import {GetServerSideProps} from 'next';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home({level, currentExperience, challengeCompleted} : HomeProps ) {
  return (
    <ChallengeProvider
      level = {level}
      currentExperience = {currentExperience}
      challengeCompleted = {challengeCompleted}>
        <CountdownProvider>
          <main className={styles.container}>

            <Head>
              <title>Labor | Início</title>
            </Head>

            <ExperienceBar/>

            <section>
              <div className={styles.cycleContainer}>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
               <ChallengeBox />
            </section>
          </main>
          </ CountdownProvider>
          </ChallengeProvider>
        
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const {level, currentExperience, challengeCompleted} = req.cookies;

  return {
    props: {
      level: Number (level),
      currentExperience: Number (currentExperience),
      challengeCompleted: Number (challengeCompleted),
    }
  }
};