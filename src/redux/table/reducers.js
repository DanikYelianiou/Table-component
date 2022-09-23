import * as constants from './constants';

const initialState = {
    tableData: [
        {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
        {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
        {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
    ],
    tableHead: [
        "Project",
        "Token type",
        "Conditions",
        "Volume",
        "ROI",
        "Free float",
        "Insurance hedge"
    ],
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.TABLE_DATA:
        return {
            ...state,
            tableData: action.payload,
        };
        case constants.TABLE_HEAD:
        return {
            ...state,
            tableHead: action.payload,
        };

        default:
        return state;
    }
};

export default tableReducer;
