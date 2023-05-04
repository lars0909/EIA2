namespace Tasklist{
    interface Tasks 
    {
        task: string,
        person: number,
        date: number,
        info: string;
    };

    export interface Tasklist
    {
        [name: string]: Tasks[];
    }
    
    export let tasklist: Tasklist =
    {
        rdmName:[
            {
                task: "Bad putzen",
                person: 1,
                date: 305,
                info: "whatever"
            },
            {
                task: "Küche putzen",
                person: 1,
                date: 305,
                info: "idk"
            },
            {
                task: "irgendwas putzen",
                person: 2,
                date: 305,
                info: "idc"
            }
        ]
    }
}
