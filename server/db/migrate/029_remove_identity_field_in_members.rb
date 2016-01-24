class RemoveIdentityFieldInMembers < ActiveRecord::Migration
  def self.up
    remove_column :members, :identity
  end

  def self.down
  end
end
