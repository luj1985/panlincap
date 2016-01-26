class AddEnglishFieldsToDeclaration < ActiveRecord::Migration
  def self.up
    change_table :declarations do |t|
      t.string :title_en
    t.text :body_en
    end
  end

  def self.down
    change_table :declarations do |t|
      t.remove :title_en
    t.remove :body_en
    end
  end
end
