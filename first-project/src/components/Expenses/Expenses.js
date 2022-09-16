import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesChart expenses={props.expenses} />
      <ExpensesList expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;
