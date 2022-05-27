import {Column,Entity,PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Teacher{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    phone: number

    @Column()
    branch: string
}