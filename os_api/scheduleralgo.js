const {PROGRAM_STATES} = require(".");

class SchedulerAlgos  {
  constructor()  {
  }

  static fcfs(program_state, queue)  {
    if (program_state == PROGRAM_STATES.done) {
      queue.dequeue();
    }
  }
}

module.exports = SchedulerAlgos;