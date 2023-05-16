import React, { createContext, useState } from 'react';
import axios from 'axios';

export interface CollaboratorsData {
    collaborators: {
        id: string;
        name: string;
        url: string;
    }[];
    getContributorsByStack: (stack: string) => void;
}

const initialContributors = [{ id: '1', name: 'userName', url: 'https' }];

const CollaboratorsContext = createContext<CollaboratorsData>({ collaborators: [{ id: '', name: '', url: '' }], getContributorsByStack: () => {}});

const CollaboratorsProvider = ({ children }: { children: React.ReactNode }) => {

    const [currentContributors, setCurrentContributors] = useState(initialContributors);

    const axiosConfig = {
        headers: {
          Authorization: `Bearer ***`,
        },
      };

    const getContributorsByStack = (stack: string) => {
        let apiUrl: string = '';

        if (stack === 'angular' || stack === 'java') {
            apiUrl = 'https://api.github.com/repos/IT-Academy-BCN/ita-challenges/collaborators';
        } else if (stack === 'react' || stack === 'node') {
            apiUrl = 'https://api.github.com/repos/IT-Academy-BCN/ita-wiki/collaborators';
        } else if (stack === 'php') {
            apiUrl = 'https://api.github.com/repos/IT-Academy-BCN/ita-landing/collaborators';
        } else {
            apiUrl = 'https://api.github.com/repos/IT-Academy-BCN/ita-challenges/collaborators';
        }

        axios.get(apiUrl, axiosConfig)
        .then(response => {
            setCurrentContributors(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    const data = { collaborators: currentContributors, getContributorsByStack };

    return (
        <CollaboratorsContext.Provider value={data}>
            {children}
        </CollaboratorsContext.Provider>
    )
}

export { CollaboratorsProvider };
export default CollaboratorsContext;
