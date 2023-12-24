import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('dashboard')
export class Dashboard {
    @PrimaryColumn()
    id?: string = '';

    @Column()
    firstName!: string;

    @Column()
    lastName?: string;

    @Column('decimal', { precision: 2, scale: 2 })
    participation!: number;

    constructor() {
        if (this.id === undefined || this.id === null || this.id === '') {
            this.id = uuid();

        }
    }
}