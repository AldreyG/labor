import {useContext} from 'react';
import {ChallengeContext} from '../contexts/ChallengeContext';


export function useChallenges () {
    const context = useContext (ChallengeContext)

    return context
}