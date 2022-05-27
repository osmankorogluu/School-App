import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Parent {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    studentid: number

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    address: string

    @Column()
    phone: number

    @Column()
    identificationNumber: number
}