class RemoveLangFromFounds < ActiveRecord::Migration
  def self.up
    change_table :founds do |t|
      t.remove :lang
    end
  end

  def self.down
    change_table :founds do |t|
      t.string :lang
    end
  end
end
