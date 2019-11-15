import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
})

test('Should generate set text filter object with text value', () => {
    const text = "something in"
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    })
})

test('Should generate set text filter object without text value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
})


test('Should generate action object for sort by date ', () => {
    expect(sortByDate()).toEqual({
        type: "SORT_BY_DATE"
    })
})


test('Should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

