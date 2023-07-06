import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';
function TodosActions({
  resetTodos,
  deleteComletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Comleted Todos"
        onClick={deleteComletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
export default TodosActions;
