

const Program = function (stdio, os_api) {
  const { stdin, stdout, stderr } = stdio;
  const { log, PROGRAM_STATES} = os_api;

  log("I am program D", );
  console.log(this.burstTime);
  setTimeout(() => {
    this.updateProgramState(PROGRAM_STATES.done)
  }, this.burstTime);

  return 0;
};

module.exports = Program;
