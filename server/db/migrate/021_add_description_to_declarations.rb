class AddDescriptionToDeclarations < ActiveRecord::Migration
  def self.up
    change_table :declarations do |t|
      t.string :description
    end
  end

  def self.down
    change_table :declarations do |t|
      t.remove :description
    end
  end
end
