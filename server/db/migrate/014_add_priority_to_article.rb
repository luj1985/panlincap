class AddPriorityToArticle < ActiveRecord::Migration
  def self.up
    change_table :articles do |t|
      t.integer :priority
    end
  end

  def self.down
    change_table :articles do |t|
      t.remove :priority
    end
  end
end
