import { Entity ,Column,PrimaryGeneratedColumn,} from "typeorm"
@Entity()
export class Project{
    @PrimaryGeneratedColumn()
    int:number
    
    @Column()
    studentname: string

    @Column()
    studentsurname: string
    
    @Column({ type: "int", width: 5 })
    class:number

    @Column({ type: 'date' })
    givendate:Date;

    @Column({type: 'date'})
    datetime:Date

    @Column({ type: "int", width: 3 })
    gradegiven:number;

    @Column()
    department:string

    @Column()
    lesson:string
}
