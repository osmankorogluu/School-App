import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    identificationNumber: number

    @Column()
    class: number

    @Column()
    gender: string

    @Column()
    district: string

    @Column()
    city: string

    @Column()
    phone: string

    @Column()
    section: string

}