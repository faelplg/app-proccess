import React from 'react';
import {
    ItemsHistory,
    NumberDay,
    PaineHistory,
    TextHistory,
    TextMonth,
    TextNumberDay,
    TextYear,
    ViewHistory,
} from '../styles/details';
import {PaddingBottomArea} from '../styles/general';

// import { Container } from './styles';

export interface Props {
    description: string;
    year: string;
    month: string;
    day: string;
}

const HistoryComponent: React.FC<Props> = ({
    description,
    year,
    month,
    day,
}: any) => {
    return (
        <ViewHistory>
            <ItemsHistory>
                <NumberDay>
                    <TextNumberDay>{day}</TextNumberDay>
                </NumberDay>
                <PaineHistory>
                    <TextMonth>{month}</TextMonth>
                    <PaddingBottomArea padding={1} />
                    <TextYear>{year}</TextYear>
                    <PaddingBottomArea padding={2} />
                    <TextHistory>{description}</TextHistory>
                </PaineHistory>
            </ItemsHistory>
        </ViewHistory>
    );
};

export default HistoryComponent;
