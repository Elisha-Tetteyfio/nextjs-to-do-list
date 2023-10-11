export function todayTask(tasks) {
  const newtasks = tasks.filter((task)=> task.date == new Date().toJSON().slice(0, 10))
  return newtasks
}
export function completeTask(tasks) {
  const newtasks = tasks.filter((task)=> task.completed == true)
  return newtasks
}
export function pendingTask(tasks) {
  const newtasks = tasks.filter((task)=> task.completed == false)
  return newtasks
}