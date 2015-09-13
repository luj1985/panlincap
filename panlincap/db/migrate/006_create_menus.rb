class CreateMenus < ActiveRecord::Migration
  def self.up
    create_table :menus do |t|
      t.string :title
      t.string :link
      t.integer :parent
      t.timestamps
    end
  end

  def self.down
    drop_table :menus
  end
end
