import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { OrderProduct } from "./OrderProduct";
import { User } from "./User";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({type: "float"})
    price: number

    @OneToMany(() => OrderProduct, (orderProducts) => orderProducts.product)
    orderProducts: OrderProduct[]
}
