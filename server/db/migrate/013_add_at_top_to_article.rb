class AddAtTopToArticle < ActiveRecord::Migration
  def self.up
    change_table :articles do |t|
      t.boolean :attop
    end
  end

  def self.down
    change_table :articles do |t|
      t.remove :attop
    end
  end
end
