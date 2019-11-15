
//Set Text Filter
export const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
});

//Sort by Amount
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})

//Sort by Date
export const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})

export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})