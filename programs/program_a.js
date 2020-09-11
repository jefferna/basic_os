

const Program = function (stdio, os_api) {
  const { stdin, stdout, stderr } = stdio;
  const { log, PROGRAM_STATES} = os_api;

  log("I am program A", );
  // // stdout.push("I am program A");
  this.burstTime = 4000;
  console.log(this.burstTime);
  setTimeout(() => {
    this.updateProgramState(PROGRAM_STATES.done)
  }, this.burstTime);

  return 0;
};

module.exports = Program;
