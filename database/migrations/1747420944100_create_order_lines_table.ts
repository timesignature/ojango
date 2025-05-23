import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'order_lines'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('product_id').references('id').inTable('products')
      table.integer('quantity').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
