export interface IToDo {
    id:number
    title: string
    description: string
    isCompleted: boolean
    isArchived: boolean
    andDate: Date | Number | string
    selected: boolean
}