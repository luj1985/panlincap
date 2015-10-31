class AddFullNameToFounds < ActiveRecord::Migration
  def self.up
    change_table :founds do |t|
      t.string :fullname
    end
  end

  def self.down
    change_table :founds do |t|
      t.remove :fullname
    end
  end
end
