import '.App.css'
let todoList1 =[
  { completed: true, priority: 1, content: 'Complete demo'},
  { completed: true, priority: 2, content: 'Complete demo 2'},
  { completed: false, priority: 3, content: 'Complete demo 3'} 

function TodoList(props) {
  return <p>{props.content}</p>
}
funtion App( {
  let array = todoList1.map((value) =>
  <TodoItem content={value.content} />
  )
  return (
    array
  );
}