'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table
        .integer('piece_id')
        .unsigned()
        .references('id')
        .inTable('pieces')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema
