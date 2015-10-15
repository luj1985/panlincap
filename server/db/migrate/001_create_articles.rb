class CreateArticles < ActiveRecord::Migration
  def self.up
    create_table :articles do |t|
      t.string :title
      t.text :body
      t.string :keyword
      t.integer :author_id
      t.integer :category_id
      t.integer :count
      t.timestamps
    end
  end

  def self.down
    drop_table :articles
  end
end
