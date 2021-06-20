import BaseHttpService from "../../shared/service/base-http-service"

class TaskService extends BaseHttpService {
  async addTask(body) {
    try {
      const data = await this.post("user/info", body)
      return data
    } catch (error) {}
  }

  async fetchTasks() {
    try {
      const data = await this.get("user/info")
      return data
    } catch (error) {}
  }

  async taskUpdate(id) {
    try {
      const data = await this.patch(`tasks/single-active/${id}`)
      return data
    } catch (error) {}
  }
}

export default TaskService
