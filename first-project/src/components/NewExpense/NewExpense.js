import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const savedExpensesHandler = (expenses) => {
    props.onAddExpense(expenses);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={savedExpensesHandler} />
    </div>
  );
};

export default NewExpense;
