import { v4 as uuidv4 } from 'uuid';
const data = [
    {
        id: 'one',
        number: 1,
        background: 'red',
    },
    {
        id: 'two',
        number: 2,
        background: 'blue',
    },
    {
        id: 'three',
        number: 3,
        background: 'yellow',
    },
    {
        id: 'four',
        number: 4,
        background: 'green',
    },
    {
        id: 'five',
        number: 5,
        background: 'purple',
    }
]


export const columnsFromBackend = {
    [uuidv4()]: {
        title: 'Container-1',
        items: data,
    },
    [uuidv4()]: {
        title: 'Container-2',
        items: [],
    },
    [uuidv4()]: {
        title: 'Container-3',
        items: [],
    },
};
