class AddEnlishFullNameToFounds < ActiveRecord::Migration
  def self.up
    change_table :founds do |t|
      t.string :fullname_en
    end
  end

  def self.down
    change_table :founds do |t|
      t.remove :fullname_en
    end
  end
end
