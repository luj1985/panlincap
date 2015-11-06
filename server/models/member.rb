class Member < ActiveRecord::Base
  after_initialize :init

  def init
    self.priority ||= self.id
  end
end
