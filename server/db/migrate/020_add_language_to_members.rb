class AddLanguageToMembers < ActiveRecord::Migration
  def self.up
    change_table :members do |t|
      t.string :lang, default: "zh"
    end
  end

  def self.down
    change_table :members do |t|
      t.remove :lang
    end
  end
end
