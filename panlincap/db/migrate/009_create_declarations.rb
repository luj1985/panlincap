class CreateDeclarations < ActiveRecord::Migration
  def self.up
    create_table :declarations do |t|
      t.string :name
      t.string :title
      t.text :body
      t.timestamps
    end
  end

  def self.down
    drop_table :declarations
  end
end
