class RemoveLangFieldInMembers < ActiveRecord::Migration
  def self.up
    remove_column :members, :lang
  end

  def self.down
  end
end
