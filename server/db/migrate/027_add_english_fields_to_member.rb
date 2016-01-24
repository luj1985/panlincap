class AddEnglishFieldsToMember < ActiveRecord::Migration
  def self.up
    change_table :members do |t|
      t.string :name_en
    t.string :title_en
    t.text :description_en
    end
  end

  def self.down
    change_table :members do |t|
      t.remove :name_en
    t.remove :title_en
    t.remove :description_en
    end
  end
end
