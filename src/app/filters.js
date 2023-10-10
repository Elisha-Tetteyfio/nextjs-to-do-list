export function todayTask(tasks) {
  const newtasks = tasks.filter((task)=> task.date == new Date().toJSON().slice(0, 10))
  return newtasks
}