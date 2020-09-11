const TIME_SCALE = 1000;
const CPU_INTERRUPT_INTERVAL_MS = TIME_SCALE * 4;
const OS_TICK_INTERVAL_MS = TIME_SCALE * 1;

const os_api = require("./os_api");

const { log, Queue, store, file, Program, PROGRAM_STATES, Kyu } = os_api;
const SchedulerAlgos = require("./os_api/scheduleralgo");

const ProgramA = new Program("A", require("./programs/program_a"));
const ProgramB = new Program("B", require("./programs/program_b"));
const ProgramC = new Program("C", require("./programs/program_c"));
const ProgramD = new Program("D", require("./programs/program_d"));

const kyut = new Kyu();

const readline = require("readline");
const program = require("./os_api/program");
const rl = readline.createInterface(
  input =  process.stdin,
);
rl.on("line", (input) =>
{
  switch (input.toLowerCase()){
    case 'a':
      kyut.enqueue(new Program("A", require("./programs/program_a")));
      break;
    case 'b':
      kyut.enqueue(new Program("B", require("./programs/program_b")));
      break;
    case 'c':
      kyut.enqueue(new Program("C", require("./programs/program_c")));
      break;
    case 'd':
      kyut.enqueue(new Program("D", require("./programs/program_d")));
      break;
  }
});

kyut.enqueue(ProgramA);
kyut.enqueue(ProgramB);
console.log("############ BEFORE SORT", kyut.getItems());
// kyut.enqueue(ProgramC);
// kyut.enqueue(ProgramD);

let currentProgram;

// OS Function to set the "Software" Program counter
const setCurrentProgram = function () {
  currentProgram = kyut.front();
};

// Main OS Loop
setInterval(() => {
  if (!kyut.isEmpty())
  {
    setCurrentProgram();
    console.log(`Program Name ${currentProgram.name} : ${currentProgram.program_state}`);
    const programeState = currentProgram.run(os_api);
    SchedulerAlgos.fcfs(currentProgram.program_state, kyut);

    kyut.getItems().filter(program => !program.isRunning()).sort((a,b) => a.burstTime - b.burstTime);
    console.log("############ AFTER SORT", kyut.getItems());
  }
  else {
    console.log("No current programs running.")
  }
  
}, OS_TICK_INTERVAL_MS);
