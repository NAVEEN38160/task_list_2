type Status = "Complete" | "In Progress" | "To Do"

export type Task = {
    id : number
    name : string,
    status : Status,
}