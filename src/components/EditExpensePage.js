import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
        window.location.reload(); //dirty way to make sure chart data updates

    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
        window.location.reload(); //dirty way to make sure chart data updates
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);








// import React from 'react';
// import { connect } from 'react-redux';
// import ExpenseForm from './ExpenseForm';
// import ConfirmDeleteModal from './ConfirmDeleteModal';
// import { startEditExpense, startRemoveExpense } from '../actions/expenses';

// export class EditExpensePage extends React.Component {

//     state = {
//         selectedExpense: undefined
//     }

//     onSubmit = (expense) => {
//         this.props.startEditExpense(this.props.expense.id, expense);
//         this.props.history.push('/');
//     };

//     onRemove = () => {
//         this.setState(() => ({
//             selectedExpense: this.props.expense.description
//         }));
//     };

//     handleDeletionYes = () => {
//         this.setState(() => ({
//             selectedExpense: undefined
//         }))
//         this.props.startRemoveExpense({ id: this.props.expense.id });
//         this.props.history.push('/');
//     }

//     handleDeletionNo = () => {
//         this.setState(() => ({
//             selectedExpense: undefined
//         }))
//         this.props.history.push('/');
//     }


//     render() {
//         return (
//             <div>
//                 <div className="page-header">
//                     <div className="content-container">
//                         <h1 className="page-header__title">Edit Expense</h1>
//                     </div>
//                 </div>

//                 <div className="content-container">
//                     <ExpenseForm
//                         className="form"
//                         expense={this.props.expense}
//                         onSubmit={this.onSubmit}
//                     />
//                     <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
//                 </div>
//                 <ConfirmDeleteModal
//                     selectedExpense={this.state.selectedExpense}
//                     handleDeletionNo={this.handleDeletionNo}
//                     handleDeletionYes={this.handleDeletionYes}
//                 />
//             </div>
//         );
//     }
// };

// const mapStateToProps = (state, props) => ({
//     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
// });

// const mapDispatchToProps = (dispatch, props) => ({
//     startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
//     startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
