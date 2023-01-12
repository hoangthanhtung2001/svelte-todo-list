export interface ITodo{
    id:string,
    title:string,
    quantity:number,
    isCompleted:boolean
}

export interface ListTodo{
    id:string
    name:string,
    task:Array<ITodo>
}

export type simpleType = ListTodo[];
export type FiltersType = string
