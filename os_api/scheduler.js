class OSCheduler {
    constructor(algo) {
        
    }

    nextProgram() {

    }

}

/*  FIRST COME FIRST SERVE 
@loop1:
        state
    p0 running
    p1  ready
    p2  ready
    p3  ready
    p4  ready
    p5  ready
@end of loop1:
    p0 - done
    p1 running
    p2 - ready
    p3  ready
    p4  ready
    p5  ready

    if state == done{
        queue.dequeue(program)
    }
*/