export function getTodayTask(tasks) {
  const newtasks = tasks.filter((task)=> task.date == new Date().toJSON().slice(0, 10))
  return newtasks
}
export function getCompleteTask(tasks) {
  const newtasks = tasks.filter((task)=> task.completed == true)
  return newtasks
}
export function getPendingTask(tasks) {
  const newtasks = tasks.filter((task)=> task.completed == false)
  return newtasks
}